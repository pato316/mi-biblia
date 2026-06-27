#!/usr/bin/env python3
"""Parser de Biblia RVR1960 desde PDF a JSON estructurado.
Salida: {libro: {capitulo: {versiculo: texto}}}
"""
import pdfplumber, re, json

LIG={'ﬁ':'fi','ﬂ':'fl','ﬀ':'ff','ﬃ':'ffi','ﬄ':'ffl','ĳ':'ij','Ĳ':'IJ','ﬅ':'st'}
def fix_text(s):
    for k,v in LIG.items(): s=s.replace(k,v)
    return s

HEADER_TOP=26   # todo lo que este por encima (top<26) es header/numero de pagina

def classify(w):
    sz=round(w['size'],1); fn=w.get('fontname','')
    if sz>=16: return 'title'
    if sz<=8.6: return 'verse'
    if 8.9<=sz<=10.9: return 'header'
    if sz>=11.5 and 'Bold' in fn: return 'chapter'
    return 'body'

def extract_book(pdf, page_start, page_end, libro):
    data={}
    cap=1; ver=1; buf=[]; capitular=None; pending_range=[]
    def add(text):
        if not text.strip(): return
        data.setdefault(cap,{})
        cur=data[cap].get(ver,'')
        data[cap][ver]=(cur+' '+text).strip()
    def flush():
        nonlocal buf, pending_range
        if buf:
            t=fix_text(' '.join(buf))
            t=re.sub(r'(\w)- (\w)',r'\1\2',t)
            t=re.sub(r'\s+([,.;:])',r'\1',t)
            t=re.sub(r'\s+',' ',t).strip()
            add(t)
            for vr in pending_range:
                data.setdefault(cap,{})[vr]=data[cap].get(ver,'')
        buf=[]; pending_range=[]
    for pgnum in range(page_start, page_end):
        raw=pdf.pages[pgnum].extract_words(extra_attrs=['size','fontname'])
        # pre-agrupar tokens de versiculo contiguos (ej "13" "," "14" -> "13,14")
        words=[]; i=0
        while i<len(raw):
            w=raw[i]
            if classify(w)=='verse' and re.fullmatch(r'\d+',w['text'].strip()):
                nums=[w['text'].strip()]; j=i+1; last=w
                while j<len(raw):
                    nx=raw[j]; nxt=nx['text'].strip()
                    if nxt==',' or (classify(nx)=='verse' and re.fullmatch(r'\d+',nxt)):
                        if nxt!=',': nums.append(nxt)
                        last=nx; j+=1
                    else: break
                merged=dict(w); merged['text']=','.join(nums)
                words.append(merged); i=j; continue
            words.append(w); i+=1
        for w in words:
            if w['top']<HEADER_TOP: continue   # salta header/num pagina
            c=classify(w); t=w['text'].strip()
            if c=='title':
                if len(t)==1 and t.isalpha(): capitular=t
                continue
            if c=='chapter' and re.fullmatch(r'\d+',t):
                flush(); cap=int(t); ver=1; continue
            if c=='verse':
                nums=re.findall(r'\d+',t)
                if nums:
                    flush()
                    ver=int(nums[0])
                    pending_range=[int(n) for n in nums[1:]]  # versiculos que comparten texto
                continue
            if c=='body':
                if capitular:
                    t=capitular+t; capitular=None
                buf.append(t)
        flush()
    flush()
    return {libro:data}

if __name__=='__main__':
    pdf=pdfplumber.open('/mnt/user-data/uploads/Biblia_RVR1960.pdf')
    data=extract_book(pdf, 4, 7, 'Génesis')
    g=data['Génesis']
    for v in range(1,16):
        print(f'1:{v}:', g['1'].get(v, g['1'].get(str(v),'<falta>'))[:120] if 1 in g or '1' in g else '?')
