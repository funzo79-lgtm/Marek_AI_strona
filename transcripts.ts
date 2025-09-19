/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const transcripts: Record<string, string> = {
  '/transcripts/odcinek-1.txt': `Witajcie w pierwszym odcinku podcastu "Marek AI", w którym zanurzymy się w fascynujący świat sztucznej inteligencji. Nazywam się Marek i będę waszym przewodnikiem. W dzisiejszym odcinku skupimy się na absolutnych podstawach: czym właściwie jest sztuczna inteligencja, jaka jest jej historia i jakie są jej główne rodzaje? Zaczynajmy.

Na początek, spróbujmy zdefiniować, czym jest AI. W najprostszych słowach, sztuczna inteligencja to dziedzina informatyki, która zajmuje się tworzeniem systemów komputerowych zdolnych do wykonywania zadań, które normalnie wymagają ludzkiej inteligencji. Mówimy tu o takich czynnościach jak uczenie się, rozumowanie, rozwiązywanie problemów, percepcja czy rozumienie języka.

Kluczową różnicą między AI a tradycyjnym oprogramowaniem jest zdolność do adaptacji. Zwykły program działa według ściśle określonych, niezmiennych reguł. Jeśli warunek A jest spełniony, wykonaj czynność B. Sztuczna inteligencja natomiast potrafi uczyć się na podstawie danych i doświadczeń, a następnie dostosowywać swoje działanie, aby lepiej realizować postawione przed nią cele. To właśnie ta zdolność do "myślenia" i ewolucji odróżnia ją od klasycznych algorytmów.

Teraz, gdy mamy już ogólne pojęcie, co to jest AI, cofnijmy się w czasie, aby poznać jej historię. Choć idea maszyn myślących sięga starożytności, to prawdziwy początek ery AI datuje się na lata 50. XX wieku. To właśnie wtedy, w 1956 roku, podczas konferencji w Dartmouth, po raz pierwszy użyto terminu "sztuczna inteligencja". To wydarzenie zapoczątkowało falę optymizmu i intensywnych badań.

Pierwsze lata to okres wielkich nadziei. Powstawały programy zdolne do rozwiązywania problemów algebraicznych, dowodzenia twierdzeń geometrycznych czy grania w warcaby. Jednak szybko okazało się, że zadania, które dla ludzi są proste, jak rozpoznawanie twarzy czy rozumienie mowy, dla maszyn stanowiły ogromne wyzwanie.

Potem nadeszły tak zwane "zimy AI" – okresy, w których entuzjazm opadał, a finansowanie badań było znacznie ograniczane. Stało się jasne, że stworzenie prawdziwie inteligentnej maszyny jest o wiele trudniejsze, niż początkowo zakładano. Problemem była zarówno niewystarczająca moc obliczeniowa komputerów, jak i brak odpowiedniej ilości danych do uczenia.

Przełom nastąpił wraz z rozwojem internetu i ogromnym wzrostem mocy obliczeniowej pod koniec XX i na początku XXI wieku. Pojawiły się nowe techniki, takie jak uczenie maszynowe, a w szczególności głębokie uczenie, które zrewolucjonizowały tę dziedzinę. Dziś AI jest wszędzie – w naszych smartfonach, w systemach rekomendacyjnych, w medycynie, finansach i wielu innych obszarach.

Na koniec naszego dzisiejszego odcinka, pomówmy o trzech głównych rodzajach sztucznej inteligencji, o których często się mówi. Są to: wąska sztuczna inteligencja, ogólna sztuczna inteligencja i superinteligencja.

Pierwszy rodzaj, czyli Wąska AI, znana również jako ANI (Artificial Narrow Intelligence), to jedyny typ sztucznej inteligencji, który faktycznie istnieje dzisiaj. Są to systemy zaprojektowane do wykonywania jednego, konkretnego zadania. Asystent głosowy w twoim telefonie, system rozpoznawania twarzy, algorytm rekomendujący filmy – to wszystko przykłady wąskiej AI. Są one niezwykle skuteczne w swojej specjalizacji, ale nie potrafią robić niczego poza nią.

Drugi rodzaj to Ogólna AI, czyli AGI (Artificial General Intelligence). To jest to, co często widzimy w filmach science-fiction – maszyna o inteligencji równej ludzkiej, zdolna do rozumienia, uczenia się i stosowania wiedzy w dowolnej dziedzinie. AGI potrafiłaby prowadzić samochód, pisać poezję, prowadzić badania naukowe i rozmawiać na każdy temat, tak jak człowiek. Jest to wciąż cel teoretyczny i nikt jeszcze nie wie, jak go osiągnąć, ani kiedy to nastąpi.

I wreszcie trzeci, najbardziej hipotetyczny rodzaj – Superinteligencja, czyli ASI (Artificial Superintelligence). To inteligencja, która znacznie przewyższa najtęższe ludzkie umysły we wszystkich dziedzinach, włączając w to kreatywność, mądrość i umiejętności społeczne. Wizja ASI budzi zarówno ogromne nadzieje, jak i obawy, ale na razie pozostaje w sferze dalekiej przyszłości.

Podsumowując, w dzisiejszym odcinku zdefiniowaliśmy sztuczną inteligencję jako systemy zdolne do adaptacji i uczenia się. Prześledziliśmy jej historię, od narodzin w latach 50., przez okresy stagnacji, aż po dzisiejszy renesans napędzany przez uczenie maszynowe. Na koniec, omówiliśmy trzy kluczowe typy AI: istniejącą dziś wąską AI, hipotetyczną ogólną AI oraz futurystyczną superinteligencję.

To wszystko na dziś. Dziękuję za wysłuchanie pierwszego odcinka podcastu "Marek AI". W kolejnym odcinku przyjrzymy się bliżej silnikowi napędowemu współczesnej AI, czyli uczeniu maszynowemu. Do usłyszenia!`,
  '/transcripts/odcinek-2.txt': `Witajcie w drugim odcinku podcastu "Marek AI". W poprzednim odcinku omówiliśmy podstawy: czym jest sztuczna inteligencja, jej historię i rodzaje. Dzisiaj zagłębimy się w temat, który jest sercem i silnikiem współczesnej AI – uczenie maszynowe, czyli machine learning.

Czym dokładnie jest uczenie maszynowe? Najprościej mówiąc, jest to poddziedzina sztucznej inteligencji, która daje komputerom zdolność do uczenia się bez bycia wprost zaprogramowanym. Zamiast pisać sztywne reguły, dostarczamy algorytmowi ogromne ilości danych i pozwalamy mu samodzielnie znaleźć w nich wzorce, zależności i na tej podstawie podejmować decyzje lub robić przewidywania.

To fundamentalna zmiana w podejściu. Zamiast mówić maszynie "jak" coś zrobić, pokazujemy jej "co" ma osiągnąć na podstawie przykładów. To trochę jak uczenie dziecka rozpoznawania zwierząt. Nie opisujemy mu precyzyjnie, że kot ma cztery łapy, futro i ogon, ale pokazujemy mu setki zdjęć kotów, mówiąc "to jest kot". Po pewnym czasie dziecko samo zaczyna rozpoznawać koty, nawet te, których nigdy wcześniej nie widziało. Podobnie działają algorytmy uczenia maszynowego.

Istnieją trzy główne paradygmaty, czyli sposoby uczenia maszynowego. Są to: uczenie nadzorowane, uczenie nienadzorowane oraz uczenie przez wzmacnianie. Omówmy każdy z nich.

Pierwszy i najpopularniejszy to uczenie nadzorowane (supervised learning). W tym podejściu "nadzór" polega na tym, że dostarczamy algorytmowi dane, które są już opisane, czyli "oetykietowane". Każdy przykład w zbiorze danych ma przypisaną prawidłową odpowiedź. Celem algorytmu jest nauczenie się reguły, która potrafi mapować dane wejściowe na prawidłowe odpowiedzi.

Uczenie nadzorowane dzieli się na dwa główne typy zadań: klasyfikację i regresję.
Klasyfikacja polega na przypisaniu danych do jednej z predefiniowanych kategorii. Na przykład, uczymy model rozpoznawania spamu, dając mu tysiące e-maili z etykietą "spam" lub "nie spam". Po treningu model potrafi sam zaklasyfikować nowe, nieznane wiadomości. Inne przykłady to rozpoznawanie, czy na zdjęciu jest kot, czy pies, albo diagnozowanie chorób na podstawie objawów.
Regresja z kolei polega na przewidywaniu wartości ciągłej, czyli liczby. Na przykład, na podstawie danych o mieszkaniach, takich jak metraż, lokalizacja i liczba pokoi, model może przewidzieć jego cenę. Inne przykłady to prognozowanie pogody, przewidywanie kursu akcji czy szacowanie czasu dostawy.

Drugi paradygmat to uczenie nienadzorowane (unsupervised learning). Tutaj sytuacja jest zupełnie inna. Dostarczamy algorytmowi dane, które nie mają żadnych etykiet. Nie mówimy mu, co jest prawidłową odpowiedzią. Zadaniem modelu jest samodzielne odkrycie ukrytej struktury, wzorców i zależności w tych danych.

Najpopularniejsze zadania w uczeniu nienadzorowanym to klastrowanie i asocjacja.
Klastrowanie, czyli grupowanie, polega na podzieleniu danych na grupy, w których obiekty są do siebie podobne, a jednocześnie różnią się od obiektów w innych grupach. Wyobraźmy sobie, że mamy dane o klientach sklepu. Algorytm klastrujący może samodzielnie podzielić ich na segmenty, na przykład "oszczędni studenci", "rodziny z dziećmi" czy "zamożni seniorzy", co pozwala na lepsze dopasowanie oferty marketingowej.
Asocjacja to odkrywanie reguł współwystępowania. Klasycznym przykładem jest analiza koszyków zakupowych w supermarkecie. Algorytm może odkryć regułę, że klienci, którzy kupują pieluchy, często kupują również piwo. Taka wiedza może być wykorzystana do optymalizacji rozmieszczenia produktów na półkach.

I wreszcie trzeci paradygmat: uczenie przez wzmacnianie (reinforcement learning). Ten rodzaj uczenia jest inspirowany psychologią behawioralną i przypomina tresurę zwierząt. Mamy tu "agenta", który działa w pewnym "środowisku". Agent wykonuje akcje, a za każdą z nich otrzymuje od środowiska "nagrodę" lub "karę". Celem agenta jest nauczenie się takiej strategii działania, czyli "polityki", która maksymalizuje sumę otrzymanych nagród w czasie.

Uczenie przez wzmacnianie świetnie sprawdza się w sytuacjach, gdzie trzeba podejmować sekwencje decyzji. To właśnie dzięki tej technice powstały programy, które pokonały mistrzów świata w szachach czy Go. Agent uczył się gry, rozgrywając miliony partii sam ze sobą i otrzymując nagrodę za wygraną, a karę za przegraną. Inne zastosowania to sterowanie robotami, optymalizacja systemów logistycznych czy zarządzanie zasobami.

Na koniec warto podkreślić jedną, niezwykle ważną rzecz. Niezależnie od tego, o którym paradygmacie uczenia mówimy, fundamentem zawsze są dane. Jakość, ilość i różnorodność danych treningowych ma absolutnie kluczowe znaczenie dla skuteczności każdego modelu uczenia maszynowego. Zasada "garbage in, garbage out" (śmieci na wejściu, śmieci na wyjściu) jest tu święta. Nawet najlepszy algorytm nie stworzy dobrego modelu, jeśli będzie uczony na złych, niekompletnych lub stronniczych danych.

Podsumowując, dzisiaj dowiedzieliśmy się, że uczenie maszynowe to serce współczesnej AI, polegające na automatycznym odkrywaniu wzorców w danych. Poznaliśmy trzy główne paradygmaty: uczenie nadzorowane, gdzie uczymy na oznaczonych przykładach; uczenie nienadzorowane, gdzie algorytm sam szuka struktury w danych; oraz uczenie przez wzmacnianie, oparte na systemie nagród i kar.

To wszystko w tym odcinku. W następnym przyjrzymy się bliżej konkretnej, niezwykle popularnej dziś architekturze modeli AI – wielkim modelom językowym, znanym jako LLM. Dziękuję za wysłuchanie i do usłyszenia!`,
  '/transcripts/odcinek-3.txt': `Witajcie w trzecim odcinku podcastu "Marek AI". Ostatnio mówiliśmy o uczeniu maszynowym, czyli silniku napędowym sztucznej inteligencji. Dzisiaj skupimy się na jednym z jego najbardziej spektakularnych owoców – wielkich modelach językowych, czyli LLM-ach (Large Language Models), które zrewolucjonizowały sposób, w jaki komunikujemy się z maszynami.

Czym są wielkie modele językowe? To zaawansowane modele AI, które zostały wytrenowane na ogromnych ilościach danych tekstowych, aby rozumieć, generować, tłumaczyć i podsumowywać ludzki język. Modele takie jak GPT, Gemini czy Llama to właśnie przykłady LLM-ów.

Zastanówmy się, co oznacza słowo "wielki" w ich nazwie. Odnosi się ono do trzech kluczowych aspektów. Po pierwsze, "wielkie dane". Modele te są trenowane na niewyobrażalnych zbiorach tekstów – setkach miliardów słów pochodzących z książek, artykułów, stron internetowych, praktycznie z całego dostępnego publicznie internetu. Ta ogromna baza wiedzy pozwala im nauczyć się gramatyki, składni, faktów o świecie i subtelnych niuansów językowych.

Po drugie, "wielka liczba parametrów". Parametry to wewnętrzne zmienne modelu, które są dostosowywane w procesie uczenia. Można je porównać do synaps w ludzkim mózgu. Im więcej parametrów, tym bardziej złożone wzorce i zależności model jest w stanie uchwycić. Najnowsze LLM-y mają setki miliardów, a nawet biliony parametrów, co daje im niezwykłe zdolności.

I po trzecie, "wielka moc obliczeniowa". Trenowanie tak ogromnych modeli wymaga gigantycznej mocy obliczeniowej, dostępnej tylko w największych centrach danych. Proces ten może trwać tygodnie lub miesiące i pochłaniać energię o wartości milionów dolarów.

Jak właściwie działają te modele? W sercu większości nowoczesnych LLM-ów leży architektura zwana "Transformer", wprowadzona w 2017 roku. Jej kluczowym elementem jest mechanizm "uwagi" (attention). Pozwala on modelowi ważyć znaczenie różnych słów w tekście wejściowym podczas przetwarzania i generowania odpowiedzi. Dzięki temu model wie, na których fragmentach zdania powinien się skupić. Na przykład, w zdaniu "Robot podniósł piłkę, bo był za ciężki", mechanizm uwagi pomoże modelowi zrozumieć, że "on" odnosi się do robota, a nie do piłki.

W swojej istocie, LLM to niezwykle zaawansowany "przewidywacz następnego słowa". Kiedy dajemy mu jakieś zdanie, on na podstawie wszystkiego, czego się nauczył, oblicza prawdopodobieństwo wystąpienia każdego możliwego słowa jako następnego i wybiera to najbardziej prawdopodobne. Potem dokleja to słowo do sekwencji i powtarza proces, generując tekst słowo po słowie. To, co wydaje się prostą zasadą, w połączeniu z ogromną skalą danych i parametrów, prowadzi do zdumiewająco spójnych i kreatywnych rezultatów.

Mimo swoich imponujących zdolności, wielkie modele językowe mają też istotne ograniczenia, o których absolutnie trzeba pamiętać.

Po pierwsze, "halucynacje". To zjawisko polega na tym, że model generuje informacje, które brzmią wiarygodnie, ale są całkowicie fałszywe lub bezsensowne. Dzieje się tak, ponieważ model nie "wie" niczego w ludzkim tego słowa znaczeniu. On jedynie statystycznie przewiduje kolejne słowa. Czasami te statystyki prowadzą go na manowce, w wyniku czego "wymyśla" fakty, daty czy cytaty. Dlatego kluczowe jest, aby zawsze weryfikować informacje generowane przez LLM-y, zwłaszcza w krytycznych zastosowaniach.

Po drugie, "uprzedzenia" (biases). Modele uczą się na danych stworzonych przez ludzi, a te dane odzwierciedlają nasze społeczne uprzedzenia i stereotypy. W rezultacie LLM może powielać, a nawet wzmacniać te szkodliwe wzorce, faworyzując pewne grupy społeczne lub generując obraźliwe treści. Twórcy modeli ciężko pracują nad minimalizacją tego problemu, ale jest to jedno z największych wyzwań w dziedzinie etyki AI.

Po trzecie, brak realnego rozumienia świata. Model operuje wyłącznie na poziomie języka i statystycznych korelacji między słowami. Nie ma ciała, nie ma zmysłów, nie ma doświadczeń ze światem fizycznym. Nie rozumie, co to znaczy "być ciężkim" albo "być czerwonym" w taki sposób, jak my to rozumiemy. Jego wiedza jest powierzchowna, oparta na wzorcach tekstowych, a nie na głębokim, przyczynowo-skutkowym modelu rzeczywistości.

Podsumowując, wielkie modele językowe to potężne narzędzia, których "wielkość" odnosi się do danych, parametrów i mocy obliczeniowej. Działają one głównie w oparciu o architekturę Transformer i mechanizm uwagi, przewidując kolejne słowa w sekwencji. Jednak musimy być świadomi ich ograniczeń, takich jak skłonność do halucynacji, powielanie uprzedzeń i brak prawdziwego rozumienia świata.

To wszystko na dziś. W kolejnym odcinku zajmiemy się praktyczną stroną interakcji z LLM-ami i nauczymy się, jak tworzyć skuteczne zapytania, czyli "prompty", aby uzyskać od nich jak najlepsze rezultaty. Dziękuję i do usłyszenia!`,
  '/transcripts/odcinek-4.txt': `Witajcie w czwartym odcinku podcastu "Marek AI". W poprzednim odcinku rozmawialiśmy o wielkich modelach językowych, ich możliwościach i ograniczeniach. Dzisiaj zejdziemy na poziom praktyczny i zajmiemy się kluczową umiejętnością w pracy z AI – sztuką tworzenia skutecznych zapytań, czyli promptowaniem.

Czym jest prompt? To po prostu instrukcja, pytanie lub dowolny tekst, który wprowadzamy do modelu językowego, aby uzyskać od niego odpowiedź. Jakość tej odpowiedzi w ogromnym stopniu zależy od jakości naszego promptu. Zasada "garbage in, garbage out" działa tu doskonale. Jeśli nasze zapytanie będzie niejasne, model prawdopodobnie udzieli nam ogólnej lub nieprzydatnej odpowiedzi. Dlatego warto poznać kilka zasad i technik, które pomogą nam stać się mistrzami w "rozmowie" z AI.

Zacznijmy od trzech fundamentalnych zasad dobrego promptu: precyzja, kontekst i rola.

Po pierwsze, precyzja. Im bardziej szczegółowe i jednoznaczne będzie nasze zapytanie, tym lepiej. Zamiast pytać "Napisz coś o psach", co jest bardzo ogólne, spróbujmy: "Napisz krótki, 100-wyrazowy akapit o historii udomowienia psa, przeznaczony dla dzieci w wieku 10 lat". Taki prompt określa temat, długość, format i grupę docelową, co daje modelowi jasne wytyczne.

Po drugie, kontekst. Dostarczenie modelowi odpowiedniego tła jest kluczowe, zwłaszcza w bardziej złożonych zadaniach. Jeśli chcemy, aby AI napisało e-mail, podajmy mu kontekst: "Jestem project managerem. Napisz profesjonalny, ale przyjazny e-mail do mojego zespołu, informujący o przesunięciu terminu projektu 'Alpha' o dwa tygodnie z powodu nieoczekiwanych problemów technicznych. Podkreśl, że doceniasz ich ciężką pracę." Bez tego kontekstu, e-mail mógłby być zbyt formalny, zbyt luźny lub po prostu nieadekwatny.

Po trzecie, definiowanie roli. Możemy "nakazać" modelowi, aby wcielił się w określoną rolę, co znacząco wpływa na styl i treść jego odpowiedzi. Możemy zacząć prompt od instrukcji: "Jesteś doświadczonym marketingowcem. Zaproponuj 5 chwytliwych haseł reklamowych dla nowego napoju energetycznego z naturalnych składników." Albo: "Wciel się w rolę historyka i wyjaśnij przyczyny wybuchu II wojny światowej w sposób zrozumiały dla licealisty." Nadanie roli pomaga modelowi dostosować ton i perspektywę.

Oprócz tych podstawowych zasad, istnieje kilka bardziej zaawansowanych technik promptowania, które warto znać.

Jedną z nich jest "Few-Shot Prompting". Polega ona na podaniu modelowi kilku przykładów tego, czego od niego oczekujemy, zanim zadamy mu właściwe pytanie. Na przykład, jeśli chcemy, aby model klasyfikował sentyment recenzji filmowych, możemy napisać:
"Recenzja: 'Ten film był nudny.' Sentyment: Negatywny.
Recenzja: 'Absolutnie fantastyczna gra aktorska!' Sentyment: Pozytywny.
Recenzja: 'Całkiem niezły, ale nic specjalnego.' Sentyment: Neutralny.
Recenzja: 'Nie mogłem oderwać wzroku od ekranu.' Sentyment: ?"
Dając mu te przykłady, "uczymy" go w locie, jakiego rodzaju odpowiedzi oczekujemy, co znacząco poprawia jego skuteczność.

Inną potężną techniką, zwłaszcza w przypadku problemów wymagających logicznego rozumowania, jest "Chain-of-Thought Prompting", czyli "promptowanie łańcuchem myśli". Zamiast prosić o samą odpowiedź, prosimy model, aby wyjaśnił swój tok rozumowania krok po kroku. Na przykład, zamiast pytać "Ile piłek tenisowych zmieści się w autobusie?", zapytajmy: "Oszacuj, ile piłek tenisowych zmieści się w standardowym autobusie szkolnym. Opisz swoje rozumowanie krok po kroku, uwzględniającsv wymiary autobusu, piłki i sposób ich pakowania." Taka instrukcja zmusza model do rozłożenia problemu na mniejsze części i bardziej logicznego podejścia, co często prowadzi do dokładniejszych wyników.

Na koniec, warto wspomnieć o technice "Flipped Interaction", czyli odwróconej interakcji. Zamiast samemu próbować sformułować idealny prompt, możemy poprosić o to AI. Na przykład: "Chcę napisać opowiadanie fantasy o młodym czarodzieju, który odkrywa starożytny artefakt. Jestem twoim asystentem. Zadawaj mi pytania dotyczące postaci, fabuły, świata i magicznego systemu, abym mógł dostarczyć ci wszystkich informacji potrzebnych do napisania pierwszego rozdziału." W ten sposób model sam przejmuje inicjatywę i pomaga nam doprecyzować nasze potrzeby.

Podsumowując, skuteczne promptowanie to sztuka, która wymaga praktyki. Pamiętajmy o trzech filarach: precyzji, kontekście i definiowaniu roli. Eksperymentujmy też z zaawansowanymi technikami, takimi jak Few-Shot, Chain-of-Thought czy Flipped Interaction. Im lepiej nauczymy się komunikować z AI, tym potężniejszym narzędziem się ona dla nas stanie.

To wszystko w dzisiejszym odcinku. W następnym pójdziemy o krok dalej i zobaczymy, jak od ogólnych promptów przejść do tworzenia spersonalizowanych, wyspecjalizowanych asystentów AI. Dziękuję za uwagę i do usłyszenia!`,
  '/transcripts/odcinek-5.txt': `Witajcie w piątym odcinku podcastu "Marek AI". W poprzednim odcinku nauczyliśmy się, jak tworzyć skuteczne prompty, aby lepiej komunikować się z modelami językowymi. Dzisiaj pójdziemy o krok dalej i odkryjemy, jak przekształcić te jednorazowe zapytania w coś znacznie potężniejszego: spersonalizowanych, wyspecjalizowanych asystentów AI.

Większość interakcji z chatbotami opiera się na serii niezależnych pytań i odpowiedzi. Ale co, jeśli chcielibyśmy, aby nasz asystent AI zawsze pamiętał, kim jesteśmy, jaki jest nasz cel i w jakim stylu ma odpowiadać? Tutaj z pomocą przychodzą tak zwane "instrukcje niestandardowe" (custom instructions) lub podobne mechanizmy, które pozwalają zdefiniować "osobowość" i "konstytucję" naszego cyfrowego pomocnika.

Zamiast za każdym razem pisać długi prompt z kontekstem i rolą, możemy raz zdefiniować te wytyczne, a model będzie ich przestrzegał w każdej kolejnej rozmowie. To tak, jakbyśmy zatrudniali nowego pracownika – na początku dajemy mu szczegółowe instrukcje dotyczące jego obowiązków, a potem oczekujemy, że będzie się do nich stosował.

Jak więc stworzyć taką "konstytucję" dla naszego asystenta AI? Możemy ją oprzeć na sześciu kluczowych filarach: rola, misja, zasady, ton, proces i format wyjściowy. Omówmy każdy z nich.

Pierwszy filar to Rola. Kim ma być nasz asystent? Definiujemy tu jego tożsamość i perspektywę. Na przykład: "Jesteś ekspertem w dziedzinie produktywności osobistej, z dogłębną wiedzą na temat metodologii GTD, techniki Pomodoro i zarządzania energią." Albo: "Jesteś kreatywnym copywriterem specjalizującym się w marketingu dla małych firm z branży e-commerce." Jasno zdefiniowana rola natychmiast ukierunkowuje odpowiedzi modelu.

Drugi filar to Misja. Jaki jest główny cel naszego asystenta? Co ma dla nas osiągnąć? Misja powinna być zwięzła i klarowna. Na przykład: "Twoją misją jest pomaganie mi w organizacji moich codziennych zadań, priorytetyzacji projektów i eliminowaniu rozpraszaczy, aby zmaksymalizować moją efektywność." Albo: "Twoim celem jest generowanie chwytliwych i perswazyjnych tekstów na strony internetowe, do mediów społecznościowych i kampanii e-mailowych, które zwiększą sprzedaż moich produktów."

Trzeci filar to Zasady. Są to twarde reguły, których asystent musi bezwzględnie przestrzegać. To nasze "zawsze rób" i "nigdy nie rób". Przykłady zasad: "Zawsze używaj języka polskiego.", "Nigdy nie udzielaj porad medycznych ani prawnych.", "Zawsze podawaj źródła swoich informacji, jeśli to możliwe.", "Unikaj technicznego żargonu i wyjaśniaj złożone koncepcje w prosty sposób."

Czwarty filar to Ton. Jak ma brzmieć nasz asystent? Definiujemy tu styl komunikacji. Czy ma być formalny, przyjazny, humorystyczny, autorytatywny, a może motywujący? Na przykład: "Twój ton powinien być profesjonalny, ale jednocześnie wspierający i empatyczny. Używaj pozytywnego języka i zwracaj się do mnie po imieniu (Marek)."

Piąty filar to Proces. Jak asystent ma podchodzić do rozwiązywania problemów? Możemy tu zdefiniować jego metodologię działania. Na przykład: "Kiedy proszę cię o rozwiązanie problemu, zawsze postępuj według następujących kroków: 1. Poproś o doprecyzowanie celu. 2. Zaproponuj trzy różne podejścia, wymieniając ich wady i zalety. 3. Pomóż mi wybrać najlepsze rozwiązanie i opracować plan działania." Taki proces strukturyzuje interakcję i prowadzi do bardziej przemyślanych wyników.

I wreszcie szósty, niezwykle ważny filar: Format wyjściowy. Jak mają wyglądać odpowiedzi asystenta? Precyzyjne zdefiniowanie formatu oszczędza nam mnóstwo czasu na późniejszą edycję. Na przykład: "Odpowiedzi zawsze formatuj używając Markdown. Kluczowe punkty przedstawiaj w formie listy wypunktowanej. Ważne terminy pogrubiaj. Na końcu każdej odpowiedzi dodaj sekcję 'Następne kroki' z trzema sugestiami dalszych działań."

Łącząc te sześć filarów – rolę, misję, zasady, ton, proces i format – tworzymy kompleksową instrukcję, która przekształca ogólny model językowy w naszego osobistego, wyspecjalizowanego eksperta. Możemy stworzyć asystenta do nauki języków, asystenta do planowania podróży, asystenta do pisania kodu czy strategicznego doradcę dla naszej firmy.

Podsumowując, zamiast polegać na jednorazowych, rozbudowanych promptach, możemy wykorzystać mechanizmy instrukcji niestandardowych, aby zdefiniować stałą "konstytucję" dla naszego asystenta AI. Budując ją w oparciu o sześć filarów – rolę, misję, zasady, ton, proces i format wyjściowy – tworzymy potężne, spersonalizowane narzędzie, które jest idealnie dopasowane do naszych potrzeb i stylu pracy.

To wszystko w tym odcinku. W następnym zrobimy kolejny krok w ewolucji AI i porozmawiamy o autonomicznych agentach – systemach, które nie tylko odpowiadają na nasze pytania, ale samodzielnie wykonują zadania. Dziękuję i do usłyszenia!`,
  '/transcripts/odcinek-6.txt': `Witajcie w szóstym odcinku podcastu "Marek AI". W poprzednich odcinkach przeszliśmy drogę od podstawowych promptów do tworzenia spersonalizowanych asystentów. Dzisiaj wkraczamy w kolejny, niezwykle ekscytujący etap ewolucji sztucznej inteligencji: świat autonomicznych agentów AI.

Jaka jest fundamentalna różnica między asystentem a agentem? Asystent AI, nawet ten najbardziej zaawansowany, jest z natury reaktywny. Czeka na nasze polecenie, przetwarza je i dostarcza odpowiedź. Jego działanie kończy się wraz z wygenerowaniem tekstu. Agent AI idzie o krok dalej. Jest proaktywny. Otrzymuje od nas cel, a następnie samodzielnie planuje i wykonuje sekwencję działań, aby ten cel osiągnąć.

Kluczową koncepcją, która umożliwia tę autonomię, jest zdolność agenta do korzystania z narzędzi (tools). Narzędziem może być praktycznie wszystko: wyszukiwarka internetowa, kalkulator, kalendarz, interfejs do wysyłania e-maili, a nawet inne modele AI, na przykład do generowania obrazów. Agent nie jest już ograniczony do wiedzy, na której został wytrenowany. Kiedy napotyka problem, którego nie może rozwiązać za pomocą swojej wewnętrznej wiedzy, potrafi "sięgnąć" po odpowiednie narzędzie.

Wyobraźmy sobie, że prosimy asystenta: "Zaplanuj mi weekendową wycieczkę do Krakowa". Asystent wygeneruje nam listę propozycji: co zwiedzić, gdzie zjeść. Ale to my musimy potem wejść na strony internetowe, sprawdzić pogodę, zarezerwować bilety i hotel.

Jeśli to samo zadanie damy agentowi AI, jego działanie będzie wyglądać zupełnie inaczej. Agent najpierw stworzy plan. Krok 1: sprawdzić prognozę pogody w Krakowie na najbliższy weekend. Aby to zrobić, użyje narzędzia "wyszukiwarka internetowa". Krok 2: znaleźć połączenia kolejowe z Warszawy do Krakowa. Użyje narzędzia do rezerwacji biletów. Krok 3: znaleźć hotel w centrum, który ma dobre opinie i wolne pokoje. Użyje narzędzia do rezerwacji hoteli. Krok 4: na podstawie pogody i dostępności, zarezerwować bilety i hotel, a następnie wysłać mi potwierdzenie e-mailem, używając narzędzia "e-mail".

Widzimy tutaj fundamentalną zmianę. Agent nie tylko dostarcza informacji, on wykonuje zadania w cyfrowym świecie.

Jak to działa pod maską? Wiele systemów agentowych opiera się na architekturze zwanej ReAct, co jest skrótem od "Reason and Act", czyli "Rozumuj i Działaj". Działanie agenta w tej pętli wygląda następująco:

Po pierwsze, Obserwacja (Observation). Agent analizuje bieżącą sytuację i cel, który ma osiągnąć.
Po drugie, Rozumowanie (Reasoning). Na podstawie obserwacji, agent "myśli" i tworzy wewnętrzny monolog. "OK, moim celem jest zarezerwowanie wycieczki. Najpierw muszę poznać pogodę. Najlepszym narzędziem do tego będzie wyszukiwarka."
Po trzecie, Działanie (Action). Agent decyduje się na konkretne działanie, czyli wybiera narzędzie i podaje mu odpowiednie parametry. Na przykład: "Użyj narzędzia \`wyszukiwarka\` z zapytaniem \`pogoda Kraków ten weekend\`".
Po wykonaniu akcji, agent wraca do kroku pierwszego, czyli Obserwacji. Wynik działania narzędzia (czyli np. informacja o pogodzie) staje się nową obserwacją. I pętla się powtarza. Agent znów rozumuje: "OK, pogoda będzie słoneczna. Teraz muszę znaleźć pociąg." i wykonuje kolejne działanie. Ten cykl trwa aż do momentu, gdy cel zostanie w pełni zrealizowany.

Ta pętla rozumowanie-działanie-obserwacja jest kluczem do autonomii. Pozwala agentowi na dynamiczne reagowanie na zmieniające się warunki, poprawianie własnych błędów i realizowanie złożonych, wieloetapowych zadań.

Oczywiście, technologia ta jest wciąż na wczesnym etapie rozwoju i ma swoje ograniczenia. Agenci mogą czasem utknąć w pętli, wybrać niewłaściwe narzędzie lub błędnie zinterpretować wyniki. Wymagają starannego projektowania i nadzoru. Jednak potencjał jest ogromny.

Mówimy tu o przyszłości, w której będziemy mieli osobistych agentów AI, którzy będą zarządzać naszymi kalendarzami, rezerwować spotkania, robić zakupy online, planować podróże i filtrować naszą skrzynkę odbiorczą. W biznesie, agenci będą mogli automatyzować analizę danych, tworzyć raporty, zarządzać kampaniami marketingowymi czy obsługiwać zapytania klientów.

Podsumowując, autonomiczni agenci AI to ewolucja od reaktywnych asystentów do proaktywnych wykonawców. Ich siła leży w zdolności do korzystania z narzędzi i działania w pętli ReAct, czyli rozumowanie-działanie-obserwacja, aby samodzielnie realizować postawione przed nimi cele. To technologia, która ma potencjał, by fundamentalnie zmienić sposób, w jaki pracujemy i żyjemy.

To wszystko w tym odcinku. W następnym zbadamy, co się stanie, gdy połączymy siły wielu wyspecjalizowanych agentów, tworząc całe zespoły AI, które współpracują ze sobą, aby rozwiązywać jeszcze bardziej złożone problemy. Dziękuję i do usłyszenia!`,
  '/transcripts/odcinek-7.txt': `Witajcie w siódmym odcinku podcastu "Marek AI". W poprzednim odcinku rozmawialiśmy o autonomicznych agentach, którzy potrafią samodzielnie wykonywać zadania. Dzisiaj pójdziemy o krok dalej i przyjrzymy się koncepcji budowania całych zespołów agentów AI, czyli tak zwanych systemów wieloagentowych.

Idea jest prosta i inspirowana ludzką organizacją pracy. Zamiast tworzyć jednego, ogromnego, wszechstronnego agenta, który musi być ekspertem od wszystkiego, tworzymy grupę mniejszych, wyspecjalizowanych agentów, z których każdy ma jasno zdefiniowaną rolę i kompetencje. Następnie projektujemy sposób, w jaki ci agenci będą ze sobą współpracować, aby osiągnąć wspólny, złożony cel.

Dlaczego takie podejście jest korzystne? Powodów jest kilka.

Po pierwsze, jakość i specjalizacja. Tak jak w ludzkim zespole, wyspecjalizowany ekspert zazwyczaj wykona swoje zadanie lepiej niż generalista. Możemy stworzyć agenta-analityka, który doskonale radzi sobie z przetwarzaniem danych, agenta-copywritera, który jest mistrzem w tworzeniu tekstów marketingowych, oraz agenta-stratega, który planuje całą kampanię. Każdy z nich, skupiając się na swojej wąskiej dziedzinie, osiągnie wyższą jakość pracy.

Po drugie, modułowość i skalowalność. Systemy wieloagentowe są łatwiejsze w budowie, testowaniu i utrzymaniu. Jeśli chcemy dodać nową funkcjonalność, po prostu tworzymy nowego agenta i dołączamy go do zespołu. Jeśli jeden z agentów zaczyna popełniać błędy, możemy go naprawić lub zastąpić bez naruszania reszty systemu.

Po trzecie, i co شاید najważniejsze, redukcja błędów i krytyczna ocena. Jednym z największych wyzwań w pracy z pojedynczymi modelami AI jest ich skłonność do halucynacji i generowania niepoprawnych informacji. W zespole agentów możemy wprowadzić rolę "agenta-krytyka" lub "testera". Jego jedynym zadaniem jest weryfikacja pracy innych agentów. Na przykład, agent-copywriter pisze tekst reklamy. Zanim tekst zostanie opublikowany, trafia do agenta-krytyka, którego zadaniem jest sprawdzenie go pod kątem błędów gramatycznych, spójności z marką i zgodności z faktami. Jeśli krytyk znajdzie błędy, odsyła tekst do poprawy. Taki mechanizm wzajemnej kontroli znacząco podnosi niezawodność całego systemu.

Jak więc możemy zaprojektować współpracę w takim zespole? Istnieją dwa główne modele: sekwencyjny i hierarchiczny.

Model sekwencyjny przypomina linię produkcyjną. Zadanie przechodzi od jednego agenta do drugiego w określonej kolejności. Na przykład, chcemy stworzyć raport rynkowy. Najpierw agent-researcher zbiera dane z internetu. Następnie przekazuje je do agenta-analityka, który je przetwarza i wyciąga wnioski. Wyniki analizy trafiają do agenta-pisarza, który tworzy z nich spójny raport. Na końcu, agent-korektor sprawdza tekst pod kątem błędów. To prosty i przewidywalny przepływ pracy.

Model hierarchiczny jest bardziej złożony i przypomina strukturę firmy z menedżerem i podwładnymi. Mamy tu "agenta-menedżera" lub "orkiestratora", który rozdziela zadania pomiędzy agentów-pracowników. Menedżer otrzymuje od nas główny cel, na przykład "zwiększyć sprzedaż w sklepie internetowym o 20% w następnym kwartale". Następnie rozkłada ten cel na mniejsze zadania i przydziela je odpowiednim specjalistom: "agencie od social media, stwórz nową kampanię na Facebooku", "agencie od e-mail marketingu, przygotuj newsletter z promocją", "agencie od analizy danych, monitoruj wyniki i raportuj co tydzień". Menedżer nadzoruje pracę całego zespołu, koordynuje działania i dba o to, by wszystko zmierzało do realizacji nadrzędnego celu.

Platformy takie jak CrewAI czy Microsoft Autogen to przykłady frameworków, które ułatwiają tworzenie i zarządzanie takimi zespołami agentów. Pozwalają one definiować role, zadania i modele współpracy, otwierając drzwi do automatyzacji niezwykle złożonych procesów biznesowych.

Wyobraźmy sobie zespół agentów tworzących oprogramowanie. Mamy agenta-project managera, który rozmawia z klientem i tworzy specyfikację. Przekazuje ją agentowi-programiście, który pisze kod. Kod trafia do agenta-testera, który szuka błędów. Po poprawkach, agent-DevOps wdraża aplikację na serwer. To już nie jest science-fiction, to kierunek, w którym zmierza rozwój AI.

Podsumowując, budowanie zespołów wyspecjalizowanych agentów AI to potężna strategia, która pozwala na rozwiązywanie bardziej złożonych problemów niż w przypadku pojedynczych agentów. Dzięki specjalizacji, modułowości i mechanizmom wzajemnej kontroli, systemy wieloagentowe oferują wyższą jakość, niezawodność i skalowalność. Współpraca w takich zespołach może być organizowana w modelach sekwencyjnych lub hierarchicznych, co pozwala na automatyzację skomplikowanych przepływów pracy.

To wszystko w tym odcinku. W następnym, ostatnim odcinku naszej serii podstawowej, zajmiemy się jednym z najczęściej dyskutowanych i najważniejszych problemów związanych z modelami językowymi – halucynacjami AI. Dziękuję i do usłyszenia!`,
  '/transcripts/odcinek-8.txt': `Witajcie w ósmym i ostatnim odcinku pierwszej serii podcastu "Marek AI". Przeszliśmy długą drogę, od definicji sztucznej inteligencji, przez uczenie maszynowe, wielkie modele językowe, aż po autonomiczne zespoły agentów. Dzisiaj zajmiemy się tematem, który przewijał się w naszych rozmowach wielokrotnie i który jest jednym z największych wyzwań współczesnej AI – zjawiskiem halucynacji.

Czym dokładnie są halucynacje AI? Wbrew nazwie, która może kojarzyć się z ludzkimi doznaniami, halucynacje w kontekście modeli językowych to po prostu generowanie informacji, które są nieprawdziwe, sprzeczne z faktami lub całkowicie wymyślone, ale przedstawione w sposób, który brzmi bardzo wiarygodnie i autorytatywnie. Model może zmyślić cytat, podać nieprawidłową datę historyczną, opisać nieistniejące badanie naukowe lub wymyślić biografię osoby.

Dlaczego tak się dzieje? Aby to zrozumieć, musimy przypomnieć sobie, jak działają LLM-y, o czym mówiliśmy w trzecim odcinku. W swojej istocie, są to maszyny do statystycznego przewidywania następnego słowa. Nie mają one prawdziwego modelu rzeczywistości ani świadomości prawdy i fałszu. Ich celem jest stworzenie gramatycznie poprawnego i spójnego tekstu, który pasuje do wzorców, jakich nauczyły się z danych treningowych.

Czasami, aby zachować tę spójność i "płynność" odpowiedzi, model "wypełnia luki" w swojej wiedzy, generując najbardziej prawdopodobną statystycznie sekwencję słów, nawet jeśli nie ma ona pokrycia w faktach. To właśnie jest mechanizm powstawania halucynacji. To nie jest "kłamstwo" w ludzkim rozumieniu, bo model nie ma intencji oszukiwania. To po prostu artefakt jego probabilistycznej natury.

Halucynacje są poważnym problemem, ponieważ podważają zaufanie do technologii AI. Jeśli nie możemy być pewni, czy informacja wygenerowana przez model jest prawdziwa, jej użyteczność w wielu zastosowaniach, takich jak medycyna, prawo czy badania naukowe, drastycznie spada.

Jak więc możemy sobie radzić z tym problemem? Istnieje kilka technik i strategii minimalizowania ryzyka halucynacji.

Jedną z najważniejszych jest "uziemienie" (grounding). Polega ono na dostarczeniu modelowi konkretnego, wiarygodnego źródła danych, na którym ma oprzeć swoją odpowiedź, zamiast polegać wyłącznie na swojej wewnętrznej, ogólnej wiedzy. Najpopularniejszą techniką uziemienia jest RAG, czyli Retrieval-Augmented Generation (Generowanie Wzbogacone o Wyszukiwanie).

Jak działa RAG? Kiedy zadajemy pytanie, system najpierw nie pyta o nie modelu językowego. Zamiast tego, przeszukuje naszą bazę wiedzy – na przykład zbiór dokumentów firmowych, artykułów naukowych czy transkrypcji podcastów – w poszukiwaniu fragmentów najbardziej relevantnych dla naszego zapytania. Dopiero wtedy, te znalezione fragmenty są dołączane do naszego oryginalnego pytania jako dodatkowy kontekst i całość jest wysyłana do LLM-a z instrukcją: "Odpowiedz na to pytanie, opierając się wyłącznie na dostarczonym kontekście." To zmusza model do trzymania się faktów zawartych w źródle i znacząco redukuje ryzyko wymyślania informacji. To właśnie RAG jest sercem chatbota, z którym możecie porozmawiać na stronie tego podcastu.

Inne techniki to na przykład weryfikacja i cytowanie. Możemy zbudować system, w którym po wygenerowaniu odpowiedzi przez jeden model, inny model lub algorytm próbuje zweryfikować każdą informację, porównując ją z zewnętrznymi źródłami wiedzy, na przykład z wyszukiwarką internetową. Jeśli informacja nie może być potwierdzona, jest oznaczana jako potencjalnie niewiarygodna.

Co ciekawe, skłonność modeli do "wymyślania" nie zawsze jest wadą. W zadaniach kreatywnych, takich jak pisanie opowiadań, tworzenie scenariuszy czy burze mózgów, ta zdolność do generowania nowych, nieoczywistych połączeń może być niezwykle cenna. To, co w jednym kontekście jest niebezpieczną halucynacją, w innym staje się pożądaną "kreatywnością". Kluczem jest zrozumienie natury modelu i świadome wykorzystywanie jego cech w zależności od zadania, które chcemy zrealizować.

Podsumowując, halucynacje AI to generowanie wiarygodnie brzmiących, ale nieprawdziwych informacji, wynikające ze statystycznej natury modeli językowych. Stanowią one poważne wyzwanie dla wiarygodności AI. Możemy je minimalizować za pomocą technik takich jak uziemienie, w szczególności RAG, oraz poprzez mechanizmy weryfikacji. Jednocześnie, musimy pamiętać, że ta sama cecha, która prowadzi do halucynacji, w kontekstach kreatywnych może być źródłem inspiracji.

Tym odcinkiem kończymy pierwszą serię podcastu "Marek AI", poświęconą fundamentom sztucznej inteligencji. Mam nadzieję, że te osiem odcinków dało Wam solidne podstawy i rozbudziło Waszą ciekawość. Dziękuję Wam za wspólną podróż po tym fascynującym świecie. Do usłyszenia w przyszłych projektach!`,
};
