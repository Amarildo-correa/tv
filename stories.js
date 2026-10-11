/* Dados compartilhados entre a tela inicial (index.html) e a tela de leitura (post.html) */
(function () {
  /* Notícias fictícias de Novo Hamburgo. mins = minutos desde a publicação */
  window.ROT_STORIES = [
    { id: 1, cat: 'Cidade', live: true, mins: 12,
      title: 'Ponte sobre o Arroio Luiz Rau é liberada e muda o trânsito no Centro',
      body: [
        'A ponte sobre o Arroio Luiz Rau foi liberada no fim da tarde desta quinta-feira, depois de quatro meses de obras de reforço da estrutura.',
        'Com a liberação, a Avenida Pedro Adams Filho volta a ter mão dupla no trecho entre a Rua Bento Gonçalves e a Rua General Osório. Agentes de trânsito acompanham o fluxo até o fim de semana.',
        'As linhas de ônibus que usavam desvio pela Rua Lima e Silva retomam o trajeto original a partir das 18h.'
      ] },
    { id: 2, cat: 'Economia', mins: 35,
      title: 'Polo calçadista projeta alta de 8% nas exportações até dezembro',
      body: [
        'As indústrias de calçados do Vale dos Sinos esperam fechar o ano com exportações 8% maiores que em 2025, segundo levantamento da associação do setor.',
        'Os pedidos para a coleção de inverno do hemisfério norte puxam o resultado. Estados Unidos, França e Argentina concentram a maior parte das encomendas.'
      ] },
    { id: 3, cat: 'Esportes', mins: 58,
      title: 'Noia vence no Estádio do Vale e avança à semifinal da Copa FGF',
      body: [
        'O Novo Hamburgo venceu por 2 a 1 na noite de quarta-feira, no Estádio do Vale, e garantiu vaga na semifinal da Copa FGF.',
        'O gol da classificação saiu aos 47 minutos do segundo tempo. O jogo de ida da semifinal está marcado para domingo, às 16h, fora de casa.'
      ] },
    { id: 4, cat: 'Cultura', mins: 70,
      title: 'Parcão recebe festival gratuito de música neste fim de semana',
      body: [
        'O Parque Floresta Imperial, o Parcão, recebe neste sábado e domingo um festival gratuito com doze bandas da região metropolitana.',
        'Os shows vão das 14h às 21h nos dois dias, com área de food trucks e espaço para crianças.'
      ] },
    { id: 5, cat: 'Economia', mins: 95,
      title: 'Comércio do Centro espera vender 15% mais no Dia das Crianças',
      body: [
        'Os lojistas do Centro esperam vender 15% a mais que no ano passado na semana do Dia das Crianças.',
        'As lojas do calçadão funcionam das 9h às 20h até domingo, véspera da data.'
      ] },
    { id: 6, cat: 'Cidade', mins: 120,
      title: 'Hamburgo Velho ganha roteiro noturno pelas casas enxaimel',
      body: [
        'O bairro Hamburgo Velho ganhou um roteiro noturno guiado por oito casas em estilo enxaimel construídas por imigrantes alemães no século 19.',
        'O passeio dura 90 minutos e sai da Fundação Scheffel às sextas e aos sábados, às 19h. As inscrições são gratuitas.'
      ] },
    { id: 7, cat: 'Esportes', mins: 150,
      title: 'Ginásio da Feevale sedia etapa estadual de vôlei sub-17',
      body: [
        'O ginásio do campus II da Feevale recebe de sexta a domingo a etapa estadual do campeonato de vôlei sub-17.',
        'Dezesseis equipes disputam vaga na fase nacional. A entrada é gratuita.'
      ] },
    { id: 8, cat: 'Cultura', mins: 190,
      title: 'Museu Nacional do Calçado abre mostra sobre 100 anos de design',
      body: [
        'O Museu Nacional do Calçado inaugura nesta sexta-feira uma exposição com 300 pares que contam um século de design no Vale dos Sinos.',
        'A visitação vai até março, de terça a domingo, com entrada gratuita.'
      ] },
    { id: 9, cat: 'Cidade', mins: 240,
      title: 'Vacinação contra a gripe é ampliada em 12 unidades de saúde',
      body: [
        'A Secretaria de Saúde ampliou a vacinação contra a gripe para 12 unidades básicas de saúde.',
        'Até o fim de outubro, quatro delas funcionam também das 17h às 21h. Basta levar documento com foto.'
      ] },
    { id: 10, cat: 'Economia', mins: 280,
      title: 'Feira de inovação reúne 40 startups do setor calçadista',
      body: [
        'Quarenta startups apresentam soluções para a indústria calçadista no Feevale Techpark.',
        'Entre os destaques estão solados feitos de resíduos de couro e um aplicativo que mede os pés pela câmera do celular.'
      ] },
    { id: 11, cat: 'Cidade', mins: 320,
      title: 'Prefeitura abre 400 vagas em escolas de educação infantil',
      body: [
        'A prefeitura abriu 400 novas vagas em escolas municipais de educação infantil para o ano letivo de 2027.',
        'As inscrições vão até 30 de outubro e podem ser feitas nas próprias escolas.'
      ] },
    { id: 12, cat: 'Cidade', mins: 380,
      title: 'Nova ciclovia liga o bairro Canudos ao Centro em 4,2 km',
      body: [
        'A nova ciclovia entre o bairro Canudos e o Centro foi entregue nesta quinta-feira, com 4,2 km de extensão.',
        'O trajeto tem iluminação própria e três pontos de travessia com semáforo.'
      ] },
    { id: 13, cat: 'Economia', mins: 420,
      title: 'Feirão de empregos oferece 1.200 vagas na Fenac no sábado',
      body: [
        'O feirão de empregos na Fenac oferece 1.200 vagas neste sábado, das 9h às 17h.',
        'Há oportunidades na indústria calçadista, no comércio e em serviços. É preciso levar documento e carteira de trabalho.'
      ] },
    { id: 14, cat: 'Economia', mins: 480,
      title: 'Aluguel sobe 6% em um ano em Novo Hamburgo',
      body: [
        'O valor médio do aluguel residencial subiu 6% nos últimos 12 meses em Novo Hamburgo, segundo levantamento de imobiliárias da cidade.',
        'Os bairros com maior alta foram Hamburgo Velho e Rio Branco.'
      ] },
    { id: 15, cat: 'Esportes', mins: 540,
      title: 'Corrida de rua reúne 3 mil atletas no domingo',
      body: [
        'A corrida de rua de Novo Hamburgo reúne 3 mil inscritos neste domingo, com largada às 7h na Avenida Nações Unidas.',
        'Há percursos de 5 km e 10 km. Algumas ruas do Centro ficam bloqueadas até as 11h.'
      ] },
    { id: 16, cat: 'Esportes', mins: 600,
      title: 'Escolinha do Noia abre peneira para meninas de 10 a 15 anos',
      body: [
        'A escolinha do Novo Hamburgo abre peneira para meninas de 10 a 15 anos no próximo sábado.',
        'As inscrições são gratuitas e podem ser feitas no Estádio do Vale.'
      ] },
    { id: 17, cat: 'Esportes', mins: 660,
      title: 'Nadadora hamburguense conquista ouro no Brasileiro',
      body: [
        'Uma nadadora de Novo Hamburgo conquistou a medalha de ouro nos 200 metros livre do Campeonato Brasileiro.',
        'Ela treina desde os 8 anos na piscina pública do bairro Rondônia.'
      ] },
    { id: 18, cat: 'Cultura', mins: 720,
      title: 'Biblioteca Pública passa a abrir também aos sábados',
      body: [
        'A Biblioteca Pública Municipal passa a abrir aos sábados, das 9h às 13h, a partir deste fim de semana.',
        'O acervo tem mais de 40 mil títulos e o cadastro é gratuito.'
      ] },
    { id: 19, cat: 'Cultura', mins: 800,
      title: 'Teatro Feevale estreia musical com elenco da cidade',
      body: [
        'O Teatro Feevale estreia nesta sexta-feira um musical com elenco formado por artistas de Novo Hamburgo.',
        'As sessões vão até o fim de outubro, de quinta a domingo.'
      ] },
    { id: 20, cat: 'Cultura', mins: 900,
      title: 'Feira do Livro anuncia a escritora homenageada de 2026',
      body: [
        'A Feira do Livro de Novo Hamburgo anunciou a escritora homenageada da edição de 2026, que acontece em novembro.',
        'A programação terá 120 sessões de autógrafos e atividades para escolas.'
      ] }
  ];

  /* Fotos ilustrativas do Wikimedia Commons (licenças Creative Commons), uma por notícia */
  window.ROT_IMG = {
"1": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Ostritz_Krzewina_Zgorzelecka_Grunau_Bahnhof_Neisse_Bruecke_Grenze.JPG/960px-Ostritz_Krzewina_Zgorzelecka_Grunau_Bahnhof_Neisse_Bruecke_Grenze.JPG",
"2": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Shoes_and_Bags.jpg/960px-Shoes_and_Bags.jpg",
"3": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Football_stadium_in_Tren%C4%8D%C3%ADn%2C_Slovakia.jpg/960px-Football_stadium_in_Tren%C4%8D%C3%ADn%2C_Slovakia.jpg",
"4": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Beach-Please-2022-main-stage-green-lights.jpg/960px-Beach-Please-2022-main-stage-green-lights.jpg",
"5": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Hereford%2C_High_Street_pedestrian_shopping_area.jpg/960px-Hereford%2C_High_Street_pedestrian_shopping_area.jpg",
"6": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Half_timbered_houses%2C_Miltenberg_im_Odenwald.JPG/960px-Half_timbered_houses%2C_Miltenberg_im_Odenwald.JPG",
"7": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Atlas_Arena_during_volleyball_match_2.jpg/960px-Atlas_Arena_during_volleyball_match_2.jpg",
"8": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Huron_moccasins%2C_c._1880_-_Bata_Shoe_Museum_-_DSC00641.JPG/960px-Huron_moccasins%2C_c._1880_-_Bata_Shoe_Museum_-_DSC00641.JPG",
"9": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flu_Vaccine_in_Vietnam_%2836813879320%29.jpg/960px-Flu_Vaccine_in_Vietnam_%2836813879320%29.jpg",
"10": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/MESAP_2011._-_%C5%A1tandovi_%28ju%C5%BEni_niz%29.jpg/960px-MESAP_2011._-_%C5%A1tandovi_%28ju%C5%BEni_niz%29.jpg",
"11": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/A_classroom_of_students_%287138907393%29.jpg/960px-A_classroom_of_students_%287138907393%29.jpg",
"12": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Linwood_bike_lanes.JPG/960px-Linwood_bike_lanes.JPG",
"13": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Job_Fair_2015.jpg/960px-Job_Fair_2015.jpg",
"14": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Apartment_buildings_at_Praia_da_Rocha%2C_Portim%C3%A3o.jpg/960px-Apartment_buildings_at_Praia_da_Rocha%2C_Portim%C3%A3o.jpg",
"15": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Dublin_Marathon_2009_%284046960306_cut%29.jpg/960px-Dublin_Marathon_2009_%284046960306_cut%29.jpg",
"16": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Young_girl_practices_her_soccer_skills%2C_Khayelitsha%2C_Cape_Town.jpg/960px-Young_girl_practices_her_soccer_skills%2C_Khayelitsha%2C_Cape_Town.jpg",
"17": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Swimming_Pool_lanes_and_starting_blocks_at_AIS.jpg/960px-Swimming_Pool_lanes_and_starting_blocks_at_AIS.jpg",
"18": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Westmount_Public_Library_by_Rodrigo_Tetsuo_Argenton_%2803%29.jpg/960px-Westmount_Public_Library_by_Rodrigo_Tetsuo_Argenton_%2803%29.jpg",
"19": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Stage_Apollo_Theater_Stuttgart_2014.jpg/960px-Stage_Apollo_Theater_Stuttgart_2014.jpg",
"20": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Tatar-book-publishers-3.jpg/960px-Tatar-book-publishers-3.jpg"
  };
})();
