export const product ={
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
};