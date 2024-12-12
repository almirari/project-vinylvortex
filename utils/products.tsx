export const products = [
    {
      id: "001",
      name: "Abbey Road",
      description: "Abbey Road, the iconic studio album by The Beatles, remains a timeless classic and a must-have for music lovers. This 180g vinyl edition features remastered audio for unparalleled sound quality, allowing listeners to fully experience the rich layers of instrumentation and vocal harmonies that defined a generation. From the infectious melodies of 'Come Together' to the poignant beauty of 'Here Comes The Sun,' every track showcases The Beatles' creative genius. Packaged in its original artwork, this vinyl is both a collector's gem and an auditory journey into music history.",
      price: 39.00,
      brand: "The Beatles",
      category: "Vinyl Record",
      inStock: true,
      images: [
        {
          color: "Black",
          colorCode: "#000000",
          image:
            "https://cdn.shopify.com/s/files/1/2501/6068/files/products_2FFLS-VINH-BD-0602577915123_2FFLS-VINH-BD-0602577915123_1696409160640_992x992_crop_center.jpg?v=1700801195",
        },
      ],
      reviews: [],
    },
    {
      id: "003",
      name: "Rumours",
      description: "Fleetwood Mac's 'Rumours' is one of the most celebrated albums in music history, captivating audiences with its raw emotion and iconic sound. Recorded during a tumultuous period in the band's history, each track tells a story of heartbreak, resilience, and redemption. This vinyl edition not only preserves the album's lush harmonies and intricate arrangements but also offers audiophiles a pristine listening experience. Featuring timeless hits like 'Dreams,' 'Go Your Own Way,' and 'The Chain,' 'Rumours' continues to resonate with fans across generations as a symbol of the transformative power of music.",
      price: 29.99,
      brand: "Fleetwood Mac",
      category: "Vinyl Record",
      inStock: true,
      images: [
        {
          color: "Black",
          colorCode: "#000000",
          image:
            "https://cdn.shopify.com/s/files/1/2501/6068/products/products_2FFLS-VINH-BD-0093624979357_2FFLS-VINH-BD-0093624979357_1677832929460_992x992_crop_center.jpg?v=1677832936",
        },
      ],
      reviews: [
        {
          id: "rev002",
          userId: "user002",
          productId: "003",
          rating: 5,
          comment: "A must-have for any vinyl collection. Sounds amazing.",
          createdDate: "2023-11-25T12:30:00.000Z",
          user: {
            id: "user002",
            name: "John",
            email: "john@example.com",
            image:
              "https://vinylmemories.co.uk/cdn/shop/files/HPIM3706_1200x1200.jpg?v=1692467616",
            role: "USER",
          },
        },
      ],
    },
    {
      id: "006",
      name: "HIT ME HARD AND SOFT",
      description: "Dive deep into the world of Billie Eilish with 'Hit Me Hard and Soft,' a captivating album that showcases her unique blend of artistry, vulnerability, and innovation. This record takes listeners on an emotional rollercoaster, oscillating between powerful, hard-hitting tracks and gentle, introspective ballads. Each song is a testament to Billie’s signature ethereal vocals and experimental production techniques, inviting fans to explore themes of love, loss, and self-discovery. With a mix of haunting melodies and groundbreaking beats, this album is an essential addition to the collection of any music aficionado.",
      price: 32.00,
      brand: "Billie Eilish",
      category: "Vinyl Record",
      inStock: true,
      images: [
        {
          color: "Black",
          colorCode: "#000000",
          image:
            "https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62",
        },
      ],
      reviews: [],
    },
    {
      id: "007",
      name: "Dark Side Of The Moon",
      description: "Embark on an unforgettable journey with 'The Dark Side of the Moon,' Pink Floyd's groundbreaking masterpiece that continues to define progressive rock. This album delves into the complexities of human existence, exploring themes such as mental health, greed, and existentialism. Each track is meticulously crafted, blending innovative soundscapes with poetic lyrics to create a seamless auditory experience. From the timeless resonance of 'Time' to the enigmatic allure of 'Money,' this record is an immersive exploration of sound and emotion. Perfectly remastered for vinyl, it’s an indispensable addition to any music enthusiast's collection.",
      price: 50.00,
      brand: "Pink Floyd",
      category: "Vinyl Record",
      inStock: true,
      images: [
        {
          color: "Black",
          colorCode: "#000000",
          image:
            "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT9kry1myZTi2dMJ7OtgJjmdT__lImpI-pJ9mdq42Cz8HhIet_ro_Obp6q4xbksBbpT",
        },
      ],
      reviews: [],
    },
    {
      id: "002",
      name: "AT-LP60XBT Turntable",
      description: "Discover the perfect blend of style and functionality with the AT-LP60XBT Turntable by Audio-Technica. Designed for the modern audiophile, this fully automatic belt-drive turntable features seamless Bluetooth connectivity, allowing you to enjoy the warm, rich tones of vinyl without the hassle of wires. Its sleek design and user-friendly controls make it ideal for both beginners and seasoned vinyl enthusiasts. Whether you're rediscovering classics or exploring new releases, the AT-LP60XBT delivers superior sound quality and a truly immersive listening experience.",
      price: 268.00,
      brand: "Audio-Technica",
      category: "Turntable",
      inStock: true,
      images: [
        {
          color: "White",
          colorCode: "#C0C0C0",
          image:
            "https://www.audio-technica.com/media/catalog/product/cache/177161fc218aa2dd413f2b73f6832b88/a/t/at-lp60xbt-ww_01.png",
        },
        {
          color: "Black",
          colorCode: "#000000",
          image:
            "https://www.audio-technica.com/media/catalog/product/cache/177161fc218aa2dd413f2b73f6832b88/a/t/at-lp60xbt-bk_01.png",
        },
      ],
      reviews: [
        {
          id: "rev001",
          userId: "user001",
          productId: "002",
          rating: 5,
          comment: "Excellent sound quality and the Bluetooth works flawlessly!",
          createdDate: "2023-12-01T10:00:00.000Z",
          user: {
            id: "user001",
            name: "Alice",
            email: "alice@example.com",
            image:
              "https://images.unsplash.com/photo-1683792384436-167313660657?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            role: "USER",
          },
        },
      ],
    },
    {
        id: "004",
        name: "Debut Carbon EVO Turntable",
        description:
          "An audiophile-grade turntable featuring a carbon tonearm and precision belt drive.",
        price: 499.00,
        brand: "Pro-Ject",
        category: "Turntable",
        inStock: true,
        images: [
          {
            color: "Red",
            colorCode: "#FF0000",
            image:
              "https://pro-jectusa.com/wp-content/uploads/2020/08/Debut-Carbon-Evo-Gloss-Red.jpg",
          },
          {
            color: "Black",
            colorCode: "#000000",
            image:
              "https://pro-jectusa.com/wp-content/uploads/2020/08/Debut-Carbon-Evo-Gloss-Black.jpg",
          },
          {
            color: "Green",
            colorCode: "#00ff00",
            image:
              "https://pro-jectusa.com/wp-content/uploads/2020/08/Debut-Carbon-Evo-Satin-Green.jpg",
          },
        ],
        reviews: [],
      },
    // Additional products would follow the same pattern...
  ];
  