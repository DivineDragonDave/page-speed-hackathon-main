# Bakgrund

I denna utmaning får du ett färdigt projekt för en blogg-liknande hemsida med många bilder och inlägg. Projektet är avsiktligt inte optimerat och laddar långsamt. Din uppgift är att förbättra hemsidans laddningstid och övergripande prestanda genom att tillämpa olika tekniker och bästa praxis inom webbutveckling.

# Mål

Att optimera hemsidan för att uppnå bästa möjliga poäng i Google Lighthouse Performance. Fokus ska ligga på att förbättra page speed utan att påverka sidans funktionalitet eller användarupplevelse negativt.

# Kom igång

Deltagarna kommer att kunna ladda ner Page Speed projektet från Github här: [https://github.com/marcuspousette/page-speed-hackathon](https://github.com/marcuspousette/page-speed-hackathon)

Projektet ska köras på localhost med hjälp av Live Server på VS Code.

# Krav på projektet

- Projektet ska enbart köras på mobilstorlek. Projektet kommer att bedömas på mobilstorlek (390px x 844px).
- Projektet ska se lika ut som på designbilden. Projektet ska innehålla följande delar:
  - **Blog Post**: Blog Post med Bild på Marcus, Titel, body text, Likes och views. Dynamisk data ska hämtas från [https://dummyjson.com/posts](https://dummyjson.com/posts)
  - **Hero**: Hero ska innehålla 2 bilder på Marcus, en bakgrundsbild och en iframe med länkad YT video. Titel och underrubrik ska finnas med enligt designbild.
  - **Navbar**: ska innehålla två länkar. En till hero sektionen och en till blog posts.
  - **Footer**: enligt design
  - **Logga ut data**: Projektet loggar ut data i konsolen. Projektet loggar ut Users, Posts och comments. Detta ska du också göra i ditt projekt. Hur det görs är upp till dig men informationen ska hämtas från API: [https://dummyjson.com/](https://dummyjson.com/).
- Blog posts ska sorteras i ordning med flest likes högst upp. Enbart de posts med id < 500 ska visas.

# Regler

Du får lägga till vad du vill. Du får ta bort vad du vill. Så länge projektet följer kraven ovanför så är det fritt fram att optimera projektet hur du vill. Det är upp till dig att tolka vad som är rätt och vad som är fel. En utvecklare måste kunna ta beslut under press och våga testa gränserna med sina system. Verkligheten präglas av deadlines och oklara regler… Om du bryter mot kraven får ditt lag kraftiga poängavdrag. Om du bryter mot kraven och kommer undan med det så kanske ni vinner.

> “There is a fine line between good and evil. The best devs know how to walk the line.”
>
> _Marcus Pousette_

# Bedömning av projektet

Projektet kommer att bedömas med hjälp av Google Lighthouse. Marcus kommer att:

1. Ta ert projekt och öppna det på localhost med live server i ett inkognitofönster.
2. Han kommer be Lighthouse köra en analys på sidans performance med inställningarna:
   - Mode: Navigation
   - Device: Mobile
   - Categories: Performance

Laget med högst performance vinner.

# Inlämning

Projektet lämnas in genom att zippa ihop det och skicka det till Marcus på marcus@techover.nu. Om man vill dela det via Github går det bra också.

När projektet lämnas in får man inga nya försök på sig. Se till att du lämnar in projektet på rätt sätt så att vi kan bedöma det.
