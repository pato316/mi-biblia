from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch()
    pg=b.new_page(viewport={'width':390,'height':844})
    logs=[]
    pg.on('console',lambda m: logs.append(m.type+': '+m.text))
    pg.goto('http://localhost:8099/index.html',timeout=15000)
    pg.wait_for_selector('#verses .v',timeout=10000)
    print('App carga:', pg.eval_on_selector_all('#verses .v','e=>e.length')>0)
    print('Manifest enlazado:', pg.eval_on_selector_all('link[rel=manifest]','e=>e.length'))
    print('Apple meta:', pg.eval_on_selector_all('meta[name="apple-mobile-web-app-capable"]','e=>e.length'))
    print('PLAN_FULL:', pg.evaluate('PLAN_FULL.length'))
    errs=[l for l in logs if 'error' in l.lower()]
    print('Errores:', errs[:5] if errs else 'ninguno')
    b.close()
print("done")
