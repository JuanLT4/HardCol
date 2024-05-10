import { title } from "process";

export const manufacturers = [];

export const ssdCapacity = [
  { title: "Almacenamiento", value: "" },
  { title: "1TB", value: "1TB" },
  { title: "500GB", value: "500GB" },
  { title: "240GB", value: "240GB" },
];

export const ramCapacity = [
  {
    title: "Ram",
    value: "",
  },
  {
    title: "8GB",
    value: "8GB",
  },
  {
    title: "16GB",
    value: "16GB",
  },
  {
    title: "32GB",
    value: "32GB",
  },
];

export const orden = [
  {
    title: "Ordenar por",
    value: "",
  },
  {
    title: "Mayor precio",
    value: "mayor precio",
  },
  {
    title: "Menor precio",
    value: "menor precio",
  },
];
export const footerLinks = [
  {
    title: "Redes sociales",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];

export const products = [
  {
    title: "CPU",
    products: [
      {
        title: "Ryzen 5 5600x",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 120,
            img: '/cpu.png',
          }
        ],
      },
      {
        title: "Ryzen 7 5700x",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 167,
            img: '',
          }
        ],
      },
      {
        title: "Ryzen 7 5800x",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 175,
            img: '',
          }
        ],
      },
    ],
  },
  {
    title: "VGA",
    products: [
      {
        title: "MSI Gaming GeForce RTX 3050 6GB",
        colors: [
          { title: "Negro", 
          color: "#000000", 
          price: 180, 
          img: '',
        }
      ],
      },
      {
        title: "MSI Gaming GeForce RTX 3050 8GB",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 200, 
            img: '',
          }
        ],
      },
      {
        title: "Radeon RX 6600 PowerColor 8GB",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 200, 
            img: '',
          }
        ],
      },
    ],
  },
  {
    title: "MOTHER-BOARD",
    products: [
      {
        title: "ASRock A520M-HDV",
        colors: [
          {
            title: "Negro",
            color: "#000000",
            price: 65,
            img: '',
          },
        ],
      },
      {
        title: "ASRock B550 Phantom Gaming 4",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 90, 
            img: '',
          }
        ],
      },
      {
        title: "MSI B550 Gaming GEN3",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 100, 
            img: '',
          }
        ],
      },
      {
        title: "ASUS Prime B550-PLUS",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 110, 
            img: '',
          }
        ],
      },
    ],
  },
  {
    title: "POWER-SUPPLY",
    products: [
      {
        title: "Segotep 650W 80 Plus Gold",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 50, 
            img: '',
          }
        ],
      },
      {
        title: "EVGA 650 BP 80 Plus Bronze",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 55, 
            img: '',
          }
        ],
      },
      {
        title: "MSI MAG A650BN 80 Plus Bronze",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 60, 
            img: '',
          }
        ],
      },
    ],
  },
  {
    title: "RAM",
    products: [
      {
        title: "Corsair Vengeance LPX 32GB (2x16GB)",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 70, 
            img: '',
          }
        ],
      },
      {
        title: "Corsair Vengeance LPX 32GB (2x16GB) RGB",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 81, 
            img: '',
          }
        ],
      },
    ],
  },
  {
    title: "SSD",
    products: [
      {
        title: "Crucial P3 500GB NVMe",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 52, 
            img: '',
          }
        ],
      },
      {
        title: "Wester Digital 1TB Blue SN580 NVMe",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 71, 
            img: '',
          }
        ],
      },
      {
        title: "Samsung 990 EVO 1TB NVMe",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 80, 
            img: '',
          }
        ],
      },
    ],
  },
  {
    title: "COOLING",
    products: [
      {
        title: "Wraith Stealth Cooler",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 0,
            img: '',
          }
        ],
      },
      {
        title: "Peerless Assassin 120 SE",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 34, 
            img: '',
          }
        ],
      },
      {
        title: "Phantom Spirit 120SE",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 35, 
            img: '',
          }
        ],
      },
      {
        title: "Phantom Spirit 120 EVO",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 50, 
            img: '',
          }
        ],
      },
      {
        title: "Frozen Edge 240",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 51, 
            img: '',
          }
        ],
      },
      {
        title: "Thermalright Frozen Prism 240",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 51, 
            img: '',
          }
        ],
      },
      {
        title: "Thermalright Frozen Prism 360 Black",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 62, 
            img: '',
          }
        ],
      },
      {
        title: "Sin Disipador",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 0 ,
            img: '',
          }
        ],
      },
    ],
  },
  {
    title: "CHASIS",
    products: [
      {
        title: "Xpg Valor Air",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 80, 
            img: '',
          },
          { 
            title: "Blanco", 
            color: "#ffffff", 
            price: 68,
            img: '',
          }
        ],
      },
      {
        title: "Musetex Y6",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 88, 
            img: '',
          },
          { 
            title: "Blanco", 
            color: "#ffffff", 
            price: 100,
            img: '',
          }
        ],
      },
      {
        title: "Musetex K2",
        colors: [
          { 
            title: "Negro", 
            color: "#000000", 
            price: 93.5, 
            img: '',
          },
          { 
            title: "Blanco", 
            color: "#ffffff", 
            price: 100,
            img: '',
          }
        ],
      },
    ],
  },
];

const prices = [
  { price: "2.947.862", salePrice: "3.390.041" },
  { price: "3.045.263", salePrice: "3.502.052" },
  { price: "3.045.263", salePrice: "3.502.052" },
  { price: "3.176.870", salePrice: "3.653.400" },
  { price: "3.221.882", salePrice: "3.705.164" },
  { price: "3.221.882", salePrice: "3.705.164" },
  { price: "3.215.850", salePrice: "3.698.227" },
  { price: "3.260.239", salePrice: "3.749.274" },
  { price: "3.260.239", salePrice: "3.749.274" },
  { price: "3.231.519", salePrice: "3.716.246" },
  { price: "3.327.362", salePrice: "3.992.834" },
  { price: "3.327.362", salePrice: "3.992.834" },
  { price: "3.456.863", salePrice: "4.148.235" },
  { price: "3.552.706", salePrice: "4.263.247" },
  { price: "3.552.706", salePrice: "4.263.247" },
  { price: "3.495.219", salePrice: "4.194.262" },
  { price: "3.532.671", salePrice: "4.239.205" },
  { price: "3.532.671", salePrice: "4.239.205" },
  { price: "3.279.465", salePrice: "3.771.384" },
  { price: "3.375.308", salePrice: "4.050.369" },
  { price: "3.375.308", salePrice: "4.050.369" },
  { price: "3.504.808", salePrice: "4.205.769" },
  { price: "3.542.104", salePrice: "4.250.524" },
  { price: "3.542.104", salePrice: "4.250.524" },
  { price: "3.543.165", salePrice: "4.251.798" },
  { price: "3.579.837", salePrice: "4.295.804" },
  { price: "3.579.837", salePrice: "4.295.804" },
  { price: "3.473.644", salePrice: "4.168.372" },
  { price: "3.511.446", salePrice: "4.213.735" },
  { price: "3.511.446", salePrice: "4.213.735" },
  { price: "3.638.841", salePrice: "4.548.551" },
  { price: "3.733.125", salePrice: "4.666.406" },
  { price: "3.733.125", salePrice: "4.666.406" },
  { price: "3.676.574", salePrice: "4.595.717" },
  { price: "3.770.858", salePrice: "4.713.572" },
  { price: "3.770.858", salePrice: "4.713.572" },
];

export const computers = [
  {
    id: 1,
    cpu: `${products[0].products[0].title}`,
    vga: `${products[1].products[0].title}`,
    motherBoard: `${products[2].products[0].title}`,
    powerSupply: `${products[3].products[0].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[0].title}`,
    cooling: `${products[6].products[0].title}`,
    chasis: `${products[7].products[0].title}`,
    price: `${prices[0].price}`,
    imgs: [
      "/combos/GBAJA-5600-30506GB.png",
      "/combos/5600.png",
      "/combos/3050-6GB.png",
      "/combos/A520-HDV.png",
    ],
    salePrice: `${prices[0].salePrice}`,
    discount: "15%",
  },
  {
    id: 2,
    cpu: `${products[0].products[0].title}`,
    vga: `${products[1].products[1].title}`,
    motherBoard: `${products[2].products[0].title}`,
    powerSupply: `${products[3].products[0].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[0].title}`,
    cooling: `${products[6].products[0].title}`,
    chasis: `${products[7].products[0].title}`,
    price: `${prices[1].price}`,
    imgs: [
      "/combos/GBAJA-5600-30508GB.png",
      "/combos/5600.png",
      "/combos/3050-6GB.png",
      "/combos/A520-HDV.png",
    ],
    salePrice: `${prices[1].salePrice}`,
    discount: "15%",
  },
  {
    id: 3,
    cpu: `${products[0].products[0].title}`,
    vga: `${products[1].products[2].title}`,
    motherBoard: `${products[2].products[0].title}`,
    powerSupply: `${products[3].products[0].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[0].title}`,
    cooling: `${products[6].products[0].title}`,
    chasis: `${products[7].products[0].title}`,
    price: `${prices[2].price}`,
    imgs: [
      "/combos/GBAJA-5600-RX6600.png",
      "/combos/5600.png",
      "/combos/rx6600.png",
      "/combos/A520-HDV.png",
    ],
    salePrice: `${prices[2].salePrice}`,
    discount: "15%",
  },
  {
    id: 4,
    cpu: `${products[0].products[1].title}`,
    vga: `${products[1].products[0].title}`,
    motherBoard: `${products[2].products[0].title}`,
    powerSupply: `${products[3].products[0].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[0].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[0].title}`,
    price: `${prices[3].price}`,
    imgs: [
      "/combos/GBAJA-5700-30506GB.png",
      "/combos/5700.png",
      "/combos/3050-6GB.png",
      "/combos/A520-HDV.png",
    ],
    salePrice: `${prices[3].salePrice}`,
    discount: "15%",
  },
  {
    id: 5,
    cpu: `${products[0].products[1].title}`,
    vga: `${products[1].products[1].title}`,
    motherBoard: `${products[2].products[0].title}`,
    powerSupply: `${products[3].products[0].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[0].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[0].title}`,
    price: `${prices[4].price}`,
    imgs: [
      "/combos/GBAJA-5700-30508GB.png",
      "/combos/5700.png",
      "/combos/3050-6GB.png",
      "/combos/A520-HDV.png",
    ],
    salePrice: `${prices[4].salePrice}`,

    discount: "15%",
  },
  {
    id: 6,
    cpu: `${products[0].products[1].title}`,
    vga: `${products[1].products[2].title}`,
    motherBoard: `${products[2].products[0].title}`,
    powerSupply: `${products[3].products[0].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[0].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[0].title}`,
    price: `${prices[5].price}`,
    imgs: [
      "/combos/GBAJA-5700-RX6600.png",
      "/combos/5700.png",
      "/combos/3050-6GB.png",
      "/combos/A520-HDV.png",
    ],
    salePrice: `${prices[5].salePrice}`,

    discount: "15%",
  },
  {
    id: 7,
    cpu: `${products[0].products[2].title}`,
    vga: `${products[1].products[0].title}`,
    motherBoard: `${products[2].products[0].title}`,
    powerSupply: `${products[3].products[0].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[0].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[0].title}`,
    price: `${prices[6].price}`,
    imgs: [
      "/combos/GBAJA-5800-30506GB.png",
      "/combos/5800.png",
      "/combos/3050-6GB.png",
      "/combos/A520-HDV.png",
    ],
    salePrice: `${prices[6].salePrice}`,

    discount: "15%",
  },
  {
    id: 8,
    cpu: `${products[0].products[2].title}`,
    vga: `${products[1].products[1].title}`,
    motherBoard: `${products[2].products[0].title}`,
    powerSupply: `${products[3].products[0].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[0].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[0].title}`,
    price: `${prices[7].price}`,
    imgs: [
      "/combos/GBAJA-5800-30508GB.png",
      "/combos/5800.png",
      "/combos/3050-8GB.png",
      "/combos/A520-HDV.png",
    ],
    salePrice: `${prices[7].salePrice}`,

    discount: "15%",
  },
  {
    id: 9,
    cpu: `${products[0].products[2].title}`,
    vga: `${products[1].products[2].title}`,
    motherBoard: `${products[2].products[0].title}`,
    powerSupply: `${products[3].products[0].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[0].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[0].title}`,
    price: `${prices[8].price}`,
    imgs: [
      "/combos/GBAJA-5800-RX6600.png",
      "/combos/5800.png",
      "/combos/rx6600.png",
      "/combos/A520-HDV.png",
    ],
    salePrice: `${prices[8].salePrice}`,

    discount: "15%",
  },
  {
    id: 10,
    cpu: `${products[0].products[0].title}`,
    vga: `${products[1].products[0].title}`,
    motherBoard: `${products[2].products[1].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: `${products[6].products[0].title}`,
    chasis: `${products[7].products[1].title}`,
    price: `${prices[9].price}`,
    imgs: [
      "/combos/GMEDIA-ASROCK-5600-30506GB.png",
      "/combos/5600.png",
      "/combos/3050-6GB.png",
      "/combos/ASROCK-B550.png",
    ],
    salePrice: `${prices[9].salePrice}`,

    discount: "15%",
  },
  {
    id: 11,
    cpu: `${products[0].products[0].title}`,
    vga: `${products[1].products[1].title}`,
    motherBoard: `${products[2].products[1].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: `${products[6].products[0].title}`,
    chasis: `${products[7].products[1].title}`,
    price: `${prices[10].price}`,
    imgs: [
      "/combos/GMEDIA-ASROCK-5600-30508GB.png",
      "/combos/5600.png",
      "/combos/3050-6GB.png",
      "/combos/ASROCK-B550.png",
    ],
    salePrice: `${prices[10].salePrice}`,
    discount: "20%",
  },
  {
    id: 12,
    cpu: `${products[0].products[0].title}`,
    vga: `${products[1].products[2].title}`,
    motherBoard: `${products[2].products[1].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: `${products[6].products[0].title}`,
    chasis: `${products[7].products[1].title}`,
    price: `${prices[11].price}`,
    imgs: [
      "/combos/GMEDIA-ASROCK-5600-RX6600.png",
      "/combos/5600.png",
      "/combos/3050-6GB.png",
      "/combos/ASROCK-B550.png",
    ],
    salePrice: `${prices[11].salePrice}`,
    discount: "20%",
  },
  {
    id: 13,
    cpu: `${products[0].products[1].title}`,
    vga: `${products[1].products[0].title}`,
    motherBoard: `${products[2].products[1].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[1].title}`,
    price: `${prices[12].price}`,
    imgs: [
      "/combos/GMEDIA-ASROCK-5700-30506GB.png",
      "/combos/5700.png",
      "/combos/3050-6GB.png",
      "/combos/ASROCK-B550.png",
    ],
    salePrice: `${prices[12].salePrice}`,
    discount: "20%",
  },
  {
    id: 14,
    cpu: `${products[0].products[1].title}`,
    vga: `${products[1].products[1].title}`,
    motherBoard: `${products[2].products[1].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[1].title}`,
    price: `${prices[13].price}`,
    imgs: [
      "/combos/GMEDIA-ASROCK-5700-30508GB.png",
      "/combos/5700.png",
      "/combos/3050-8GB.png",
      "/combos/ASROCK-B550.png",
    ],
    salePrice: `${prices[13].salePrice}`,
    discount: "20%",
  },
  {
    id: 15,
    cpu: `${products[0].products[1].title}`,
    vga: `${products[1].products[2].title}`,
    motherBoard: `${products[2].products[1].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[1].title}`,
    price: `${prices[14].price}`,
    imgs: [
      "/combos/GMEDIA-ASROCK-5700-RX6600.png",
      "/combos/5700.png",
      "/combos/rx6600.png",
      "/combos/ASROCK-B550.png",
    ],
    salePrice: `${prices[14].salePrice}`,
    discount: "20%",
  },
  {
    id: 16,
    cpu: `${products[0].products[2].title}`,
    vga: `${products[1].products[0].title}`,
    motherBoard: `${products[2].products[1].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[1].title}`,
    price: `${prices[15].price}`,
    imgs: [
      "/combos/GMEDIA-ASROCK-5800-30506GB.png",
      "/combos/5800.png",
      "/combos/3050-6GB.png",
      "/combos/ASROCK-B550.png",
    ],
    salePrice: `${prices[15].salePrice}`,
    discount: "20%",
  },
  {
    id: 17,
    cpu: `${products[0].products[2].title}`,
    vga: `${products[1].products[1].title}`,
    motherBoard: `${products[2].products[1].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[1].title}`,
    price: `${prices[16].price}`,
    imgs: [
      "/combos/GMEDIA-ASROCK-5800-30508GB.png",
      "/combos/5800.png",
      "/combos/3050-8GB.png",
      "/combos/ASROCK-B550.png",
    ],
    salePrice: `${prices[16].salePrice}`,
    discount: "20%",
  },
  {
    id: 18,
    cpu: `${products[0].products[2].title}`,
    vga: `${products[1].products[2].title}`,
    motherBoard: `${products[2].products[1].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[1].title}`,
    imgs: [
      "/combos/GMEDIA-ASROCK-5800-RX6600.png",
      "/combos/5800.png",
      "/combos/rx6600.png",
      "/combos/A520-HDV.png",
    ],
    price: `${prices[17].price}`,
    salePrice: `${prices[17].salePrice}`,
    discount: "20%",
  },
  {
    id: 19,
    cpu: `${products[0].products[0].title}`,
    vga: `${products[1].products[0].title}`,
    motherBoard: `${products[2].products[2].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: `${products[6].products[0].title}`,
    chasis: `${products[7].products[1].title}`,
    price: `${prices[18].price}`,
    imgs: [
      "/combos/GMEDIA-MSI-5600-30506GB.png",
      "/combos/5600.png",
      "/combos/3050-6GB.png",
      "/combos/MSI-B550.png",
    ],
    salePrice: `${prices[18].salePrice}`,
    discount: "15%",
  },
  {
    id: 20,
    cpu: `${products[0].products[0].title}`,
    vga: `${products[1].products[1].title}`,
    motherBoard: `${products[2].products[2].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: `${products[6].products[0].title}`,
    chasis: `${products[7].products[1].title}`,
    price: `${prices[19].price}`,
    imgs: [
      "/combos/GMEDIA-MSI-5600-30508GB.png",
      "/combos/5600.png",
      "/combos/3050-8GB.png",
      "/combos/MSI-B550.png",
    ],
    salePrice: `${prices[19].salePrice}`,
    discount: "20%",
  },
  {
    id: 21,
    cpu: `${products[0].products[0].title}`,
    vga: `${products[1].products[2].title}`,
    motherBoard: `${products[2].products[2].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: `${products[6].products[0].title}`,
    chasis: `${products[7].products[1].title}`,
    price: `${prices[20].price}`,
    imgs: [
      "/combos/GMEDIA-MSI-5600-RX6600.png",
      "/combos/5600.png",
      "/combos/rx6600.png",
      "/combos/MSI-B550.png",
    ],
    salePrice: `${prices[20].salePrice}`,
    discount: "20%",
  },
  {
    id: 22,
    cpu: `${products[0].products[1].title}`,
    vga: `${products[1].products[0].title}`,
    motherBoard: `${products[2].products[2].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[1].title}`,
    price: `${prices[21].price}`,
    imgs: [
      "/combos/GMEDIA-MSI-5700-30506GB.png",
      "/combos/5700.png",
      "/combos/3050-6GB.png",
      "/combos/MSI-B550.png",
    ],
    salePrice: `${prices[21].salePrice}`,
    discount: "20%",
  },
  {
    id: 23,
    cpu: `${products[0].products[1].title}`,
    vga: `${products[1].products[1].title}`,
    motherBoard: `${products[2].products[2].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[1].title}`,
    price: `${prices[22].price}`,
    imgs: [
      "/combos/GMEDIA-MSI-5700-30508GB.png",
      "/combos/5700.png",
      "/combos/3050-8GB.png",
      "/combos/MSI-B550.png",
    ],
    salePrice: `${prices[22].salePrice}`,
    discount: "20%",
  },
  {
    id: 24,
    cpu: `${products[0].products[1].title}`,
    vga: `${products[1].products[2].title}`,
    motherBoard: `${products[2].products[2].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[1].title}`,
    price: `${prices[23].price}`,
    imgs: [
      "/combos/GMEDIA-MSI-5700-RX6600.png",
      "/combos/5700.png",
      "/combos/rx6600.png",
      "/combos/MSI-B550.png",
    ],
    salePrice: `${prices[23].salePrice}`,
    discount: "20%",
  },
  {
    id: 25,
    cpu: `${products[0].products[2].title}`,
    vga: `${products[1].products[0].title}`,
    motherBoard: `${products[2].products[2].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[1].title}`,
    price: `${prices[24].price}`,
    imgs: [
      "/combos/GMEDIA-MSI-5800-30506GB.png",
      "/combos/5800.png",
      "/combos/3050-6GB.png",
      "/combos/MSI-B550.png",
    ],
    salePrice: `${prices[24].salePrice}`,
    discount: "20%",
  },
  {
    id: 26,
    cpu: `${products[0].products[2].title}`,
    vga: `${products[1].products[1].title}`,
    motherBoard: `${products[2].products[2].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[1].title}`,
    price: `${prices[25].price}`,
    imgs: [
      "/combos/GMEDIA-MSI-5800-30506GB.png",
      "/combos/5800.png",
      "/combos/3050-8GB.png",
      "/combos/MSI-B550.png",
    ],
    salePrice: `${prices[25].salePrice}`,
    discount: "20%",
  },
  {
    id: 27,
    cpu: `${products[0].products[2].title}`,
    vga: `${products[1].products[2].title}`,
    motherBoard: `${products[2].products[2].title}`,
    powerSupply: `${products[3].products[1].title}`,
    ram: `${products[4].products[0].title}`,
    ssd: `${products[5].products[1].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[1].title}`,
    price: `${prices[26].price}`,
    imgs: [
      "/combos/GMEDIA-MSI-5800-RX6600.png",
      "/combos/5800.png",
      "/combos/rx6600.png",
      "/combos/MSI-B550.png",
    ],
    salePrice: `${prices[26].salePrice}`,
    discount: "20%",
  },
  {
    id: 28,
    cpu: `${products[0].products[0].title}`,
    vga: `${products[1].products[0].title}`,
    motherBoard: `${products[2].products[3].title}`,
    powerSupply: `${products[3].products[2].title}`,
    ram: `${products[4].products[1].title}`,
    ssd: `${products[5].products[2].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[2].title}`,
    price: `${prices[27].price}`,
    imgs: [
      "/combos/GALTA-5600-30506GB.png",
      "/combos/5600.png",
      "/combos/3050-6GB.png",
      "/combos/ASUS-B550.png",
    ],
    salePrice: `${prices[27].salePrice}`,
    discount: "20%",
  },
  {
    id: 29,
    cpu: `${products[0].products[0].title}`,
    vga: `${products[1].products[1].title}`,
    motherBoard: `${products[2].products[3].title}`,
    powerSupply: `${products[3].products[2].title}`,
    ram: `${products[4].products[1].title}`,
    ssd: `${products[5].products[2].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[2].title}`,
    price: `${prices[28].price}`,
    imgs: [
      "/combos/GALTA-5600-30508GB.png",
      "/combos/5600.png",
      "/combos/3050-8GB.png",
      "/combos/ASUS-B550.png",
    ],
    salePrice: `${prices[28].salePrice}`,
    discount: "20%",
  },
  {
    id: 30,
    cpu: `${products[0].products[0].title}`,
    vga: `${products[1].products[2].title}`,
    motherBoard: `${products[2].products[3].title}`,
    powerSupply: `${products[3].products[2].title}`,
    ram: `${products[4].products[1].title}`,
    ssd: `${products[5].products[2].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[2].title}`,
    price: `${prices[29].price}`,
    imgs: [
      "/combos/GALTA-5600-RX6600.png",
      "/combos/5600.png",
      "/combos/rx6600.png",
      "/combos/ASUS-B550.png",
    ],
    salePrice: `${prices[29].salePrice}`,
    discount: "20%",
  },
  {
    id: 31,
    cpu: `${products[0].products[1].title}`,
    vga: `${products[1].products[0].title}`,
    motherBoard: `${products[2].products[3].title}`,
    powerSupply: `${products[3].products[2].title}`,
    ram: `${products[4].products[1].title}`,
    ssd: `${products[5].products[2].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[2].title}`,
    price: `${prices[30].price}`,
    imgs: [
      "/combos/GALTA-5700-30506GB.png",
      "/combos/5700.png",
      "/combos/3050-6GB.png",
      "/combos/ASUS-B550.png",
    ],
    salePrice: `${prices[30].salePrice}`,
    discount: "25%",
  },
  {
    id: 32,
    cpu: `${products[0].products[1].title}`,
    vga: `${products[1].products[1].title}`,
    motherBoard: `${products[2].products[3].title}`,
    powerSupply: `${products[3].products[2].title}`,
    ram: `${products[4].products[1].title}`,
    ssd: `${products[5].products[2].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[2].title}`,
    price: `${prices[31].price}`,
    imgs: [
      "/combos/GALTA-5700-30508GB.png",
      "/combos/5700.png",
      "/combos/3050-8GB.png",
      "/combos/ASUS-B550.png",
    ],
    salePrice: `${prices[31].salePrice}`,
    discount: "25%",
  },
  {
    id: 33,
    cpu: `${products[0].products[1].title}`,
    vga: `${products[1].products[2].title}`,
    motherBoard: `${products[2].products[3].title}`,
    powerSupply: `${products[3].products[2].title}`,
    ram: `${products[4].products[1].title}`,
    ssd: `${products[5].products[2].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[2].title}`,
    price: `${prices[32].price}`,
    imgs: [
      "/combos/GALTA-5700-RX6600.png",
      "/combos/5700.png",
      "/combos/rx6600.png",
      "/combos/ASUS-B550.png",
    ],
    salePrice: `${prices[32].salePrice}`,
    discount: "25%",
  },
  {
    id: 34,
    cpu: `${products[0].products[2].title}`,
    vga: `${products[1].products[0].title}`,
    motherBoard: `${products[2].products[3].title}`,
    powerSupply: `${products[3].products[2].title}`,
    ram: `${products[4].products[1].title}`,
    ssd: `${products[5].products[2].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[2].title}`,
    price: `${prices[33].price}`,
    imgs: [
      "/combos/GALTA-5800-30506GB.png",
      "/combos/5800.png",
      "/combos/3050-6GB.png",
      "/combos/ASUS-B550.png",
    ],
    salePrice: `${prices[33].salePrice}`,
    discount: "25%",
  },
  {
    id: 35,
    cpu: `${products[0].products[2].title}`,
    vga: `${products[1].products[1].title}`,
    motherBoard: `${products[2].products[3].title}`,
    powerSupply: `${products[3].products[2].title}`,
    ram: `${products[4].products[1].title}`,
    ssd: `${products[5].products[2].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[2].title}`,
    price: `${prices[34].price}`,
    imgs: [
      "/combos/GALTA-5800-30508GB.png",
      "/combos/5800.png",
      "/combos/3050-8GB.png",
      "/combos/ASUS-B550.png",
    ],
    salePrice: `${prices[34].salePrice}`,
    discount: "25%",
  },
  {
    id: 36,
    cpu: `${products[0].products[2].title}`,
    vga: `${products[1].products[2].title}`,
    motherBoard: `${products[2].products[3].title}`,
    powerSupply: `${products[3].products[2].title}`,
    ram: `${products[4].products[1].title}`,
    ssd: `${products[5].products[2].title}`,
    cooling: "Sin Disipador",
    chasis: `${products[7].products[2].title}`,
    price: `${prices[35].price}`,
    imgs: [
      "/combos/GALTA-5800-RX6600.png",
      "/combos/5700.png",
      "/combos/rx6600.png",
      "/combos/ASUS-B550.png",
    ],
    salePrice: `${prices[35].salePrice}`,
    discount: "25%",
  },
];
