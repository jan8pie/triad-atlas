// Triad Atlas: všetky slovenské texty stránky na jednom mieste.
//
// Ako to funguje:
//   vľavo je anglický text presne tak, ako je napísaný na stránke (podľa neho sa preklad hľadá),
//   vpravo je slovenský preklad. Ten môžeš ľubovoľne upravovať.
//
//   'English text': 'Slovenský text',
//
// - Časti v zložených zátvorkách, napr. {n} alebo {s}, sa dopĺňajú samy (číslo, názov struny...).
//   V preklade ich nechaj tak, môžeš ich len presunúť na iné miesto vo vete.
// - Ak na stránke zmeníš anglický text, zmeň ho rovnako aj tu vľavo. Inak sa preklad nenájde
//   a v slovenskej verzii zostane angličtina.
// - Nový text: pridaj sem nový riadok. Ak preklad chýba, zobrazí sa anglický text.
// - Ak je v texte apostrof ('), napíš pred neho spätnú lomku: \'
window.TRIAD_SK = {

  // ---- Horná lišta a menu (site.js) -------------------------------------------
  'Triads': 'Trojzvuky',
  'Chords of a key': 'Akordy tóniny',
  'Major & minor': 'Dur a mol',
  'Seventh chords': 'Septakordy',
  'Sus chords': 'Sus akordy',
  '6 & add9 chords': 'Akordy 6 a add9',
  'Pages': 'Stránky',
  'Copy link': 'Kopírovať odkaz',
  'Link copied': 'Odkaz skopírovaný',
  'Language': 'Jazyk',
  'Switch between light and dark colours': 'Prepnúť svetlé a tmavé farby',
  'Light / dark': 'Svetlá / tmavá',

  // ---- Spoločné pre viac stránok ----------------------------------------------
  'Root position': 'Základný tvar',
  '1st inversion': '1. obrat',
  '2nd inversion': '2. obrat',
  'Inversion': 'Obrat',
  'Strings, low to high': 'Struny, od hlbokých po vysoké',
  'String not played': 'Struna sa nehrá',
  'All': 'Všetky',
  'four sets': 'štyri skupiny',
  'Show': 'Zobraziť',
  'Hide': 'Skryť',
  'Root on string': 'Základný tón na strune',
  '{n}th string': '{n}. struna',
  'Root on the E string': 'Základný tón na strune E',
  'Root on the A string': 'Základný tón na strune A',
  'Root on the D string': 'Základný tón na strune D',
  'Built from the major shape': 'Postavené z durového tvaru',
  'Numbers in the dots': 'Čísla v bodkách',
  'Moves from the major shape': 'Pohyby z durového tvaru',
  'All degrees': 'Všetky stupne',
  'Changes only': 'Len zmeny',
  'root + new notes': 'základný tón + nové tóny',
  'line from old spot': 'čiara zo starého miesta',
  'just the shape': 'len tvar',
  'Starting shape': 'Východiskový tvar',
  'mute {s}': 'stlmiť {s}',
  '1: root': '1: základný tón',
  '3 and 5 from the major shape': '3 a 5 z durového tvaru',
  '♭3: minor third': '♭3: malá tercia',
  'Where the note was in the major shape': 'Kde bol tón v durovom tvare',
  'Play {name}, root on the {s} string: {deg}': 'Prehrať {name}, základný tón na strune {s}: {deg}',
  '{fret} of the {s} string ({note})': '{fret} na strune {s} ({note})',
  'Standard tuning (E A D G B e). The X next to each box marks the root fret. Clicking a box plays it with the root on fret {list}.':
    'Štandardné ladenie (E A D G B e). X vedľa každého diagramu označuje pražec základného tónu. Po kliknutí diagram zaznie so základným tónom na pražci {list}. Tóny sú písané medzinárodne: B je slovenské H a B♭ je slovenské B.',
  // popisy pre čítačky obrazovky
  'Display settings': 'Nastavenia zobrazenia',
  'Root string': 'Struna základného tónu',
  'Dot labels': 'Popisy bodiek',
  'Show moves': 'Zobraziť pohyby',
  'String set': 'Skupina strún',

  // ---- Trojzvuky (index.html) -------------------------------------------------
  'Triad Atlas · guitar triads and chord shapes': 'Triad Atlas · gitarové trojzvuky a tvary akordov',
  'Interactive guitar fretboard: every major, minor, diminished and augmented triad shape and inversion, with the scale it comes from.':
    'Interaktívny gitarový hmatník: všetky tvary a obraty durových, molových, zmenšených a zväčšených trojzvukov spolu so stupnicou, z ktorej vychádzajú.',
  'Fretboard map': 'Mapa hmatníka',
  'Pick a chord, one or more sets of neighbouring strings and an inversion. The top fretboard shows the triad shapes. The bottom one shows the scale they come from, with the triad notes lifted out of it. Press Play to hear the selected shape.':
    'Vyber si akord, jednu alebo viac skupín susedných strún a obrat. Horný hmatník ukazuje tvary trojzvuku. Dolný ukazuje stupnicu, z ktorej vychádzajú, a tóny trojzvuku sú v nej zvýraznené. Tlačidlom Prehrať si vybraný tvar vypočuješ.',
  'Root note': 'Základný tón',
  'Chord type': 'Typ akordu',
  'Scale': 'Stupnica',
  '(bottom fretboard)': '(dolný hmatník)',
  '(pick one or more)': '(vyber jednu alebo viac skupín)',
  'Labels': 'Popisy',
  'Display': 'Zobrazenie',
  'View': 'Pohľad',
  'Play chord': 'Prehrať akord',
  'Play arpeggio': 'Prehrať rozklad',
  // typy akordov
  'Major': 'Dur',
  'Minor': 'Mol',
  'Diminished': 'Zmenšený',
  'Augmented': 'Zväčšený',
  // stupnice: krátky názov na tlačidle (scale:...) a názov v nadpise pod ním
  'scale:Major': 'Durová',
  'scale:Lydian': 'Lydická',
  'scale:Mixolydian': 'Mixolydická',
  'scale:Natural minor': 'Prirodzená molová',
  'scale:Dorian': 'Dórska',
  'scale:Harmonic minor': 'Harmonická molová',
  'scale:Locrian': 'Lokrická',
  'scale:Whole-half dim.': 'Zmenšená (celý–pol)',
  'scale:Whole tone': 'Celotónová',
  'scale:Lydian augmented': 'Lydická zväčšená',
  'major (Ionian)': 'durová (iónska)',
  'Lydian': 'lydická',
  'Mixolydian': 'mixolydická',
  'natural minor (Aeolian)': 'prirodzená molová (aiolská)',
  'Dorian': 'dórska',
  'harmonic minor': 'harmonická molová',
  'Locrian': 'lokrická',
  'whole-half diminished': 'zmenšená (celý tón – poltón)',
  'whole tone': 'celotónová',
  'Lydian augmented': 'lydická zväčšená',
  '{root} {name} scale': '{root} {name} stupnica',
  // tlačidlá v nastaveniach
  'Notes': 'Tóny',
  'Intervals': 'Intervaly',
  'Both': 'Oboje',
  'note + interval': 'tón + interval',
  'All shapes': 'Všetky tvary',
  'every inversion, chosen strings': 'všetky obraty, vybrané struny',
  'all shapes, chosen strings': 'všetky tvary, vybrané struny',
  'One shape': 'Jeden tvar',
  'step with ‹ ›': 'krokuj šípkami ‹ ›',
  'Wide': 'Široké',
  'spread frets': 'roztiahnuté pražce',
  'Compact': 'Kompaktné',
  'fits small screens': 'pre malé obrazovky',
  'Full screen': 'Celá obrazovka',
  'hides browser bars': 'skryje lišty prehliadača',
  'Exit full screen': 'Ukončiť celú obrazovku',
  'not available in this view': 'tu nie je dostupné',
  'bass {note}': 'bas {note}',
  // texty pri hmatníkoch
  'Selected shape: strings {set} ({notes}), frets {frets}.': 'Vybraný tvar: struny {set} ({notes}), pražce {frets}.',
  'No {inv} shape fits on these strings within the first {n} frets.': 'Na týchto strunách sa do prvých {n} pražcov nezmestí žiadny tvar ({inv}).',
  'Shape {i} of {n}': 'Tvar {i} z {n}',
  'No shapes': 'Žiadne tvary',
  'Scale notes: {notes}. The triad notes {tri} are lifted out in a lighter colour.': 'Tóny stupnice: {notes}. Tóny trojzvuku {tri} sú zvýraznené svetlejšou farbou.',
  // legendy
  'Red ring: chord root': 'Červený krúžok: základný tón akordu',
  'Outer ring: selected inversion': 'Vonkajší krúžok: vybraný obrat',
  'Split dot: note shared by two inversions': 'Delená bodka: tón spoločný pre dva obraty',
  'Scale note': 'Tón stupnice',
  'Triad note (root, 3rd, 5th)': 'Tón trojzvuku (základný tón, tercia, kvinta)',
  'Outer ring and line: the triad shapes shown on the top fretboard, in their inversion colour': 'Vonkajší krúžok a čiara: tvary trojzvuku z horného hmatníka vo farbe svojho obratu',
  'Standard tuning (E A D G B e). Every triad shape is close position: the three notes stack within one octave on neighbouring strings. The scale fretboard always shows all six strings. Augmented and diminished chords use the simplest note names.':
    'Štandardné ladenie (E A D G B e). Každý tvar trojzvuku je v úzkej polohe: tri tóny ležia v rozsahu jednej oktávy na susedných strunách. Hmatník so stupnicou vždy ukazuje všetkých šesť strún. Zväčšené a zmenšené akordy používajú najjednoduchšie názvy tónov. Tóny sú písané medzinárodne: B je slovenské H a B♭ je slovenské B.',
  // popisy pre čítačky obrazovky
  'Chord settings': 'Nastavenia akordu',
  'String sets': 'Skupiny strún',
  'Page width': 'Šírka stránky',
  'Fretboard view': 'Pohľad na hmatník',
  'Triad fretboard': 'Hmatník s trojzvukmi',
  'Scale fretboard': 'Hmatník so stupnicou',
  'Fretboard diagram': 'Diagram hmatníka',
  'Choose shape, from the nut upward': 'Výber tvaru, od nultého pražca nahor',
  'Previous shape, lower on the neck': 'Predchádzajúci tvar, nižšie na hmatníku',
  'Next shape, higher on the neck': 'Ďalší tvar, vyššie na hmatníku',
  '{chord} on the fretboard': '{chord} na hmatníku',
  ', selected: {inv}, frets {frets}': ', vybrané: {inv}, pražce {frets}',
  '{scale} on the fretboard, with the notes {tri} highlighted': '{scale} na hmatníku, zvýraznené sú tóny {tri}',

  // ---- Dur a mol (major-minor.html) ---------------------------------------------
  'Major and Minor Chords · Triad Atlas': 'Durové a molové akordy · Triad Atlas',
  'How major and minor guitar chords are built: the 1, 3 and 5, step by step, with the root on the E, A or D string.':
    'Ako sa stavajú durové a molové gitarové akordy: 1, 3 a 5, krok za krokom, so základným tónom na strune E, A alebo D.',
  'Where every chord starts': 'Kde sa začína každý akord',
  'Major and Minor Chords': 'Durové a molové akordy',
  'A major chord is three notes: the 1 (root), the 3 and the 5. A full guitar shape only repeats them across the strings. A minor chord differs in a single note: the 3 drops one fret and becomes ♭3. Each row below builds one shape step by step: find the roots, add the 5, add the 3, then lower the 3 for minor. X stands for any root note, because the shapes move up and down the neck. Click a box to hear it.':
    'Durový akord tvoria tri tóny: 1 (základný tón), 3 a 5. Plný gitarový tvar ich len opakuje na ďalších strunách. Molový akord sa líši jediným tónom: 3 klesne o jeden pražec a stane sa z nej ♭3. Každý riadok nižšie stavia jeden tvar krok za krokom: nájdi základné tóny, pridaj 5, pridaj 3 a nakoniec zníž 3 na mol. X znamená ľubovoľný základný tón, pretože tvary sa dajú posúvať po hmatníku hore aj dole. Kliknutím na diagram si ho vypočuješ.',
  '3 and 5': '3 a 5',
  'A note still to come, or where the 3 was': 'Tón, ktorý ešte len príde, alebo miesto, kde bola 3',
  'The recipe on one string': 'Recept na jednej strune',
  'Count frets up from the root along a single string: the 3 is four frets higher, the 5 is seven frets higher. For minor, the 3 sits one fret lower. Every shape on this site is these same distances folded across the strings.':
    'Počítaj pražce od základného tónu nahor po jednej strune: 3 je o štyri pražce vyššie, 5 o sedem pražcov vyššie. V mole je 3 o jeden pražec nižšie. Každý tvar na tejto stránke tvoria tie isté vzdialenosti, len poskladané cez viac strún.',
  'Building the shapes': 'Stavba tvarov',
  'The three shapes the other pages start from. Read each row from left to right.': 'Tri tvary, z ktorých vychádzajú ostatné stránky. Každý riadok čítaj zľava doprava.',
  'Step by step': 'Krok za krokom',
  'roots · 5 · 3 · minor': 'základné tóny · 5 · 3 · mol',
  'Chords only': 'Len akordy',
  'major and minor': 'dur a mol',
  'Step {n}': 'Krok {n}',
  'Roots': 'Základné tóny',
  'Find every root': 'Nájdi všetky základné tóny',
  'Add the 5: a power chord': 'Pridaj 5: power chord',
  'Add the 3: major': 'Pridaj 3: dur',
  '3 → ♭3 ({s}): minor': '3 → ♭3 ({s}): mol',
  'major: 4 frets, then 3': 'dur: 4 pražce, potom 3',
  'minor: 3 frets, then 4': 'mol: 3 pražce, potom 4',
  '{n} frets': '{n} pražce',
  'The E shape, a barre chord on all six strings. It has three roots (low E, D and high e strings), two 5s and a single 3, on the G string. That one note decides everything: lower it one fret, onto the barre, and the chord is minor.':
    'Tvar E, barré akord na všetkých šiestich strunách. Má tri základné tóny (hlboká struna E, struna D a vysoká struna e), dve 5 a jedinú 3 na strune G. Tento jeden tón rozhoduje o všetkom: zníž ho o jeden pražec, na barré, a akord je molový.',
  'The A shape. Two roots (A and G strings), two 5s, and the 3 on the B string. One fret lower gives minor. The low E string is not played.':
    'Tvar A. Dva základné tóny (struny A a G), dve 5 a 3 na strune B. O jeden pražec nižšie vznikne mol. Hlboká struna E sa nehrá.',
  'The D shape on the four high strings. Two roots (D and B strings), one 5, and the 3 on the high e string. One fret lower gives minor. The low E and A strings are not played.':
    'Tvar D na štyroch vysokých strunách. Dva základné tóny (struny D a B), jedna 5 a 3 na vysokej strune e. O jeden pražec nižšie vznikne mol. Hlboké struny E a A sa nehrajú.',
  'These are the E, A and D shapes of the CAGED system. The seventh, sus, 6 and add9 pages all start from them and move one or two notes.':
    'Sú to tvary E, A a D zo systému CAGED. Stránky o septakordoch, sus akordoch a akordoch 6 a add9 z nich vychádzajú a posúvajú jeden alebo dva tóny.',
  // popisy pre čítačky obrazovky
  'Steps shown': 'Zobrazené kroky',
  'Play the notes of a major chord one after another': 'Prehrať tóny durového akordu jeden po druhom',
  'Play the notes of a minor chord one after another': 'Prehrať tóny molového akordu jeden po druhom',
  'Play: {what}, root on the {s} string': 'Prehrať: {what}, základný tón na strune {s}',
  'the minor chord': 'molový akord',

  // ---- Septakordy (seventh-chords.html) -----------------------------------------
  'Seventh Chords · Triad Atlas': 'Septakordy · Triad Atlas',
  'How guitar seventh chords are built from one major chord shape, with the root on the E, A or D string.':
    'Ako sa gitarové septakordy stavajú z jedného durového tvaru, so základným tónom na strune E, A alebo D.',
  'Seventh Chords': 'Septakordy',
  'How seventh chords are built from one major chord shape. Start with the major shape, then move one or two notes down by a fret or two: the 3 becomes ♭3 (minor), one of the roots becomes ♭7 or 7, and the 5 becomes ♭5. X stands for any root note, because the shapes move up and down the neck. Click a chord box to hear it.':
    'Ako sa septakordy stavajú z jedného durového tvaru. Začni durovým tvarom a posuň jeden alebo dva tóny o pražec či dva nižšie: z 3 sa stane ♭3 (mol), z jedného zo základných tónov ♭7 alebo 7 a z 5 sa stane ♭5. X znamená ľubovoľný základný tón, pretože tvary sa dajú posúvať po hmatníku hore aj dole. Kliknutím na diagram akordu si ho vypočuješ.',
  '♭7 or 7: the seventh': '♭7 alebo 7: septima',
  '♭5: flat fifth': '♭5: zmenšená kvinta',
  'The E-shape barre chord: the barre sits on the root fret and the low and high E strings both play the root.':
    'Barré akord v tvare E: barré leží na pražci základného tónu a hlboká aj vysoká struna E hrajú základný tón.',
  'The A-shape barre chord: the low E string is not played, the barre covers the A to high e strings.':
    'Barré akord v tvare A: hlboká struna E sa nehrá, barré pokrýva struny od A po vysoké e.',
  'The D shape on the four high strings: the root on the D string, the second root on the B string. The low E and A strings are not played.':
    'Tvar D na štyroch vysokých strunách: základný tón na strune D, druhý základný tón na strune B. Hlboké struny E a A sa nehrajú.',

  // ---- Sus akordy (sus-chords.html) ---------------------------------------------
  'Sus Chords · Triad Atlas': 'Sus akordy · Triad Atlas',
  'Sus2 and sus4 guitar chords built from the major shape: full shapes and three-string triads in every inversion.':
    'Gitarové akordy sus2 a sus4 postavené z durového tvaru: plné tvary a trojzvuky na troch strunách vo všetkých obratoch.',
  'Suspended Chords': 'Sus akordy',
  'A sus chord has no 3. The 2 (sus2) or the 4 (sus4) takes its place, so the chord sounds neither major nor minor, open and waiting to move on. Start with a major shape and move the 3: two frets down gives the 2, one fret up gives the 4. X stands for any root note, because the shapes move up and down the neck. Click a chord box to hear it.':
    'Sus akord nemá 3. Na jej miesto príde 2 (sus2) alebo 4 (sus4), takže akord neznie durovo ani molovo, ale otvorene, akoby čakal na pokračovanie. Začni durovým tvarom a posuň 3: o dva pražce nižšie vznikne 2, o jeden pražec vyššie 4. X znamená ľubovoľný základný tón, pretože tvary sa dajú posúvať po hmatníku hore aj dole. Kliknutím na diagram akordu si ho vypočuješ.',
  '2 or 4: the note that replaces the 3': '2 alebo 4: tón, ktorý nahrádza 3',
  'Full chord shapes': 'Plné tvary akordov',
  'The barre shapes from the seventh chords page, with the root on the E, A or D string.': 'Barré tvary zo stránky o septakordoch, so základným tónom na strune E, A alebo D.',
  'Triads on three strings': 'Trojzvuky na troch strunách',
  'Three notes on neighbouring strings: the same string sets and inversions as on the Triad Atlas page. Each row starts with one major triad shape and moves only its 3, so the 2 or the 4 lands on the same string.':
    'Tri tóny na susedných strunách: rovnaké skupiny strún a obraty ako na stránke Trojzvuky. Každý riadok začína jedným tvarom durového trojzvuku a posúva len jeho 3, takže 2 alebo 4 vyjde na tú istú strunu.',
  'three rows': 'tri riadky',
  'bass 1': 'bas 1',
  'bass 3 → 2 / 4': 'bas 3 → 2 / 4',
  'bass 5': 'bas 5',
  'Root position · 1 in the bass': 'Základný tvar · 1 v base',
  '1st inversion · 3, 2 or 4 in the bass': '1. obrat · 3, 2 alebo 4 v base',
  '2nd inversion · 5 in the bass': '2. obrat · 5 v base',
  'Strings {set}': 'Struny {set}',
  'The {notes} strings.': 'Struny {notes}.',
  'Play {name}, {inv} on strings {set}: {deg}': 'Prehrať {name}, {inv} na strunách {set}: {deg}',
  'sus4 is easy: the 3 on the G string moves up one fret. For sus2 the 3 cannot drop two frets, it would land behind the barre. Instead the root on the D string moves up two frets to become the 2, and the G string moves up to the 5. It is a wide stretch, easier higher up the neck.':
    'sus4 je ľahký: 3 na strune G sa posunie o jeden pražec vyššie. Pri sus2 nemôže 3 klesnúť o dva pražce, ocitla by sa za barré. Namiesto toho sa základný tón na strune D posunie o dva pražce vyššie a stane sa z neho 2 a tón na strune G sa posunie vyššie na 5. Prsty treba poriadne roztiahnuť, vo vyšších polohách na hmatníku to ide ľahšie.',
  'The 3 sits on the B string. Let it drop two frets onto the barre for sus2, or move it up one fret for sus4.':
    '3 je na strune B. Pre sus2 ju nechaj klesnúť o dva pražce na barré, pre sus4 ju posuň o jeden pražec vyššie.',
  'The 3 sits on the high e string. Two frets down gives sus2, one fret up gives sus4. The low E and A strings are not played.':
    '3 je na vysokej strune e. O dva pražce nižšie vznikne sus2, o jeden pražec vyššie sus4. Hlboké struny E a A sa nehrajú.',
  'Standard tuning (E A D G B e). The X next to each box marks the fret of the root. Clicking a full shape plays it with the root on fret {list}. Clicking a triad plays it with {note} as the root.':
    'Štandardné ladenie (E A D G B e). X vedľa každého diagramu označuje pražec základného tónu. Po kliknutí plný tvar zaznie so základným tónom na pražci {list}. Trojzvuk po kliknutí zaznie so základným tónom {note}. Tóny sú písané medzinárodne: B je slovenské H a B♭ je slovenské B.',
  'Good to know: a sus2 chord has the same three notes as the sus4 chord a fifth higher, for example Csus2 (C D G) and Gsus4 (G C D).':
    'Dobré vedieť: akord sus2 má rovnaké tri tóny ako akord sus4 o kvintu vyššie, napríklad Csus2 (C D G) a Gsus4 (G C D).',

  // ---- Akordy 6 a add9 (added-chords.html) --------------------------------------
  '6 and add9 Chords · Triad Atlas': 'Akordy 6 a add9 · Triad Atlas',
  'How guitar 6, minor 6 and add9 chords are built from one major chord shape, with the root on the E, A or D string.':
    'Ako sa gitarové akordy 6, m6 a add9 stavajú z jedného durového tvaru, so základným tónom na strune E, A alebo D.',
  '6 and add9 Chords': 'Akordy 6 a add9',
  'These chords keep the whole major or minor chord and add one more note: the 6, or the 9 (the 2, one octave higher). Start with the major shape and move one note: a spare root or 5 slides to the new note, so the 3 stays and the chord keeps its major or minor colour. That is the difference from a sus chord, where the 3 itself moves away. X stands for any root note, because the shapes move up and down the neck. Click a chord box to hear it.':
    'Tieto akordy si nechávajú celý durový alebo molový akord a pridávajú jeden tón navyše: 6 alebo 9 (to je 2 o oktávu vyššie). Začni durovým tvarom a posuň jeden tón: zdvojený základný tón alebo 5 sa presunie na nový tón, takže 3 zostáva a akord si zachová durovú alebo molovú farbu. V tom je rozdiel oproti sus akordu, kde odchádza samotná 3. X znamená ľubovoľný základný tón, pretože tvary sa dajú posúvať po hmatníku hore aj dole. Kliknutím na diagram akordu si ho vypočuješ.',
  '6: the added sixth': '6: pridaná sexta',
  '9: the added ninth (same note as the 2)': '9: pridaná nona (rovnaký tón ako 2)',
  'The E-shape barre chord. For the 6, the root on the D string walks down three frets: one fret down is the 7 of a maj7 chord, two frets the ♭7 of a 7 chord, three frets the 6. The A and high e strings rest. For add9, the root on the high e string moves up two frets to the 9 and the A string rests.':
    'Barré akord v tvare E. Pri 6 základný tón na strune D zostupuje o tri pražce: o jeden pražec nižšie je 7 z akordu maj7, o dva pražce ♭7 z akordu 7, o tri pražce 6. Struna A a vysoká struna e sa nehrajú. Pri add9 sa základný tón na vysokej strune e posunie o dva pražce vyššie na 9 a struna A sa nehrá.',
  'The A-shape barre chord. For the 6, the 5 on the high e string moves up two frets. For add9, the root on the G string moves up two frets to the 9: a wide stretch, easier higher up the neck. In the minor 6 the hand cannot reach the high 6, so the root on the G string drops three frets instead (as on the E string) and the D string rests.':
    'Barré akord v tvare A. Pri 6 sa 5 na vysokej strune e posunie o dva pražce vyššie. Pri add9 sa základný tón na strune G posunie o dva pražce vyššie na 9: prsty treba poriadne roztiahnuť, vo vyšších polohách na hmatníku to ide ľahšie. Pri m6 ruka na vysokú 6 nedočiahne, preto namiesto toho základný tón na strune G klesne o tri pražce (ako pri strune E) a struna D sa nehrá.',
  'The F shape on the four high strings: the top of the E-shape barre chord, so the root on the D string is its highest fret. For the 6, the 5 on the B string moves up two frets. For add9, the root on the high e string moves up two frets. These are the easiest shapes on the page.':
    'Tvar F na štyroch vysokých strunách: vrchná časť barré akordu v tvare E, takže základný tón na strune D je na jeho najvyššom pražci. Pri 6 sa 5 na strune B posunie o dva pražce vyššie. Pri add9 sa základný tón na vysokej strune e posunie o dva pražce vyššie. Sú to najľahšie tvary na tejto stránke.',
  'Good to know: X6 has the same four notes as the minor seventh chord three frets lower, for example C6 (C E G A) and Am7 (A C E G).':
    'Dobré vedieť: X6 má rovnaké štyri tóny ako molový septakord o tri pražce nižšie, napríklad C6 (C E G A) a Am7 (A C E G).',

  // ---- Akordy tóniny: harmonizovaná stupnica (harmonized-scale.html) -----------
  'Chords of a Key · Triad Atlas': 'Akordy tóniny · Triad Atlas',
  'The harmonized scale on guitar: the seven triads of a major or minor key on three strings, walking up the neck.':
    'Harmonizovaná stupnica na gitare: sedem trojzvukov durovej alebo molovej tóniny na troch strunách, postupne hore po hmatníku.',
  'Harmonized scale': 'Harmonizovaná stupnica',
  'Chords of a Key': 'Akordy tóniny',
  'Take a scale and build a triad on each of its seven notes, using only the notes of that scale: every other note, so 1 · 3 · 5, then 2 · 4 · 6, and so on. These seven chords belong to the key. On three neighbouring strings each finger simply walks up the scale along its own string. Step through the chords and watch which note moves one fret and which moves two.':
    'Zober stupnicu a na každom z jej siedmich tónov postav trojzvuk len z tónov tej stupnice: vždy každý druhý tón, teda 1 · 3 · 5, potom 2 · 4 · 6 a tak ďalej. Týchto sedem akordov patrí do tóniny. Na troch susedných strunách každý prst jednoducho kráča po stupnici po svojej strune. Prechádzaj akordy a sleduj, ktorý tón sa posunie o jeden pražec a ktorý o dva.',
  'Key': 'Tónina',
  'Key settings': 'Nastavenia tóniny',
  'Fretboard': 'Hmatník',
  'key:major': 'dur',
  'key:minor': 'mol',
  'In the chord': 'V akorde',
  'In the key': 'V tónine',
  '1 to 7': '1 až 7',
  'bass 1': 'bas 1',
  'bass 3': 'bas 3',
  'bass 5': 'bas 5',
  'Play up the neck': 'Prehrať hore po hmatníku',
  'Stop': 'Zastaviť',
  'Choose chord, from the nut upward': 'Výber akordu, od nultého pražca nahor',
  'Previous chord, lower on the neck': 'Predchádzajúci akord, nižšie na hmatníku',
  'Next chord, higher on the neck': 'Ďalší akord, vyššie na hmatníku',
  'Chord {i} of {n}': 'Akord {i} z {n}',
  'Notes {notes}: steps {steps} of the {key} scale.': 'Tóny {notes}: stupne {steps} stupnice {key}.',
  'Strings {set} ({strings}), frets {frets}.': 'Struny {set} ({strings}), pražce {frets}.',
  'This chord does not fit on these strings within the first {n} frets.': 'Tento akord sa na týchto strunách do prvých {n} pražcov nezmestí.',
  'The chords of {key} on strings {set}, selected: {chord}': 'Akordy tóniny {key} na strunách {set}, vybraný: {chord}',
  ', frets {frets}': ', pražce {frets}',
  'The seven chords of {key}': 'Sedem akordov tóniny {key}',
  'The order is the same in every major key: major, minor, minor, major, major, minor, diminished.':
    'Poradie je v každej durovej tónine rovnaké: dur, mol, mol, dur, dur, mol, zmenšený.',
  'The order is the same in every minor key: minor, diminished, major, minor, minor, major, major.':
    'Poradie je v každej molovej tónine rovnaké: mol, zmenšený, dur, mol, mol, dur, dur.',
  'Show and play {numeral}, {chord}: {notes}': 'Zobraziť a prehrať {numeral}, {chord}: {notes}',
  '1: root of the chord': '1: základný tón akordu',
  '3 and 5 of a major chord': '3 a 5 durového akordu',
  '♭5: diminished fifth': '♭5: zmenšená kvinta',
  'Other scale notes on these strings (click one to jump to its chord)': 'Ostatné tóny stupnice na týchto strunách (klikni na niektorý a skočíš na jeho akord)',
  'Standard tuning (E A D G B e). Each chord box shows the lowest place of that chord on the chosen strings, with the fret number on the left. Capital numerals (I, IV, V) are major chords, small ones (ii, iii, vi) are minor and ° means diminished.':
    'Štandardné ladenie (E A D G B e). Každý diagram ukazuje najnižšie miesto daného akordu na vybraných strunách, číslo pražca je vľavo. Veľké rímske číslice (I, IV, V) sú durové akordy, malé (ii, iii, vi) molové a ° znamená zmenšený. Tóny sú písané medzinárodne: B je slovenské H a B♭ je slovenské B.',
  'In a minor key the 3rd, 6th and 7th notes are one fret lower than in the major key, so their numerals carry a ♭.':
    'V molovej tónine sú 3., 6. a 7. tón o pražec nižšie než v durovej, preto majú ich číslice ♭.'
};
