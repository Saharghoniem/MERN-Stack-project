const products = [
  {
    id: 1,
    productName: "Lip-Stick",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores  Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
    price: 200,
    imageLink: [
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678706436/store/lip4_ulwhig.jpg",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678707520/roug4_ir68aa.jpg",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678705663/lip1_f99huk.avif",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678706427/store/lip3_vzm4u0.jpg",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678706449/store/lip2_m5tnfw.jpg",
    ],
  },
  
  {
    id: 2,
      productName: "Perfume",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores..",
      price: 800,
      imageLink: [
        "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678546643/store/perfume4_hsibit.jpg",
        "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678546651/store/pink5_l6e4jl.jpg",
        "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678546646/store/perfume6_bfybsd.jpg",
        "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678546654/store/perfume1_t4efnj.jpg",
        "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678546652/store/perf2_baimo0.jpg",
      ],
    },
  {
    id: 3,
    productName: "Vitamin C",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores..",
    price: 700,
    imageLink: [
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678708465/serum5_iusjrp.avif",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678705663/vitaminc_y8yokl.avif",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678708466/serum4_ptctsn.avif",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678708469/serum11_llcky3.avif",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678708470/serum2_fkfnnb.avif",
    ],
  },
  {
    id: 4,
    productName: "Cream",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores..",
    price: 250,
    imageLink: [
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678705662/cream1_xy8eul.avif",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1679181708/store/cream5_sluh4s.jpg",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1679181717/store/cream2_ytmlbj.jpg",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1679181740/store/cream3_ngsfyj.jpg",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1679210253/store/c1_suf0xd.jpg",
    ],
  },
  {
    id: 5,
    productName: "Make-up",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores..",
    price: 900,
    imageLink: [
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678707898/prushes_yc7ypy.jpg",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678546641/store/cosmetic3_vnhkbp.jpg",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678707269/store/makeup1_ay6npl.avif",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678707524/roug2_kiytoj.jpg",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678707646/makeup2_gj9tu8.jpg",
    ],
  },
  {
  id: 6,
    productName: "jewelry",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores..",
    price: 350,
    imageLink: [
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678707890/jew1_jd0sam.avif",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678707884/jew4_qqquai.avif",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678707895/jew5_gl7lnw.avif",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678707888/jew2_pj4kim.avif",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678707886/jew3_f0jfkv.avif",
    ],
  },
  {
  id: 7,
    productName: "Serum",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores..",
    price: 800,
    imageLink: [
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678708469/serum11_llcky3.avif",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1679209701/store/s4_iyw96a.jpg",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1679209698/store/s1_ed8nw0.jpg",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1679209656/store/s2_ahu5rm.jpg",
      "https://res.cloudinary.com/dqvdzugy5/image/upload/v1679209643/store/s3_nim5wi.jpg",
    ],
  },
  {
    id: 8,
      productName: "Blush",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores..",
      price: 600,
      imageLink: [
        "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678707524/roug2_kiytoj.jpg",
        "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678707520/roug4_ir68aa.jpg",
        "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678707522/rougo3_idck9q.jpg",
        "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678707646/makeup2_gj9tu8.jpg",
        "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678707898/prushes_yc7ypy.jpg",
      ],
    },
    
      {
        id: 9,
          productName: "Shampoo",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores..",
          price: 400,
          imageLink: [
            "https://res.cloudinary.com/dqvdzugy5/image/upload/v1678707893/shampoo1_j1pni7.jpg",
            "https://res.cloudinary.com/dqvdzugy5/image/upload/v1679208347/store/sh3_cheeed.jpg",
            "https://res.cloudinary.com/dqvdzugy5/image/upload/v1679208360/store/sh4_bw0ndv.jpg",
            "https://res.cloudinary.com/dqvdzugy5/image/upload/v1679208088/store/sh1_trfopj.jpg",
            "https://res.cloudinary.com/dqvdzugy5/image/upload/v1679208228/store/sh2_ievqno.jpg",
          ],
        },
];
module.exports = products;
