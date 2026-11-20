# Vzdálený popis

Prezentační web teleradiologické platformy na [vzdalenypopis.cz](https://vzdalenypopis.cz). Úvodní stránka je na `/`, leták je dostupný přímo na `/letak`. Tlačítko **Tisk / PDF** otevře tiskový dialog s formátem A5 na výšku.

Vyžaduje Node.js 20.9 nebo novější. Spuštění lokálního vývoje:

```sh
npm ci
npm run dev
```

Pro kontrolu kódu použijte `npm run lint` a `npm run format:check`. Příkaz `npm run prettify` soubory v `src/` naformátuje.

Výchozí kontaktní adresa je `info@vzdalenypopis.cz`. Pokud používáte jinou schránku, nastavte před sestavením proměnnou `CONTACT_EMAIL`.

```sh
npm run build
npm start
```
