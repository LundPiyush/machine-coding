// 20230515004024
// https://bookery-server.cyclic.app/api/products

export const booksData = [
  {
    id: 1,
    title: "Harry Potter Complete Set",
    author: "J.K. Rowling",
    bookState: "read",
    description:
      "Over 4000 pages of Harry Potter and his world, including all 7 books.\nAll seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
    bookType: "Hardcover",
    inStock: true,
    coverImg:
      "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780545162074_p3_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    originalPrice: 1450,
    discountPercent: 45,
    discountPrice: 451,
    totalRatings: 82150,
    totalStars: 4.8,
  },
  {
    id: 2,
    title: "7 Mindsets for Success, Happiness and Fulfilment",
    author: "Swami Mukundananda",
    description:
      "Thoughts and feelings that persist over time harden into an attitude. If you live with an attitude long enough, it becomes second nature—a mindset. The wrong mindset could lead you off the path of contentment, joy, enlightenment. The right one will point you to the road to success, to fulfilment and towards an extraordinary life.\n\nBlending science with Vedic scriptures, and logic with spiritual insight, Swami Mukundananda unravels the secrets of the 7 mindsets—seven techniques of training the mind and intellect and unlocking the immense potential within.",
    bookType: "Paperback",
    bookState: "want_to_read",
    inStock: true,
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1569209892l/51987423._SX318_SY475_.jpg",
    originalPrice: 295,
    discountPercent: 23,
    discountPrice: 67,
    totalRatings: 372,
    totalStars: 4.5,
  },
  {
    id: 3,
    title: "Love on the Brain",
    author: "Ali Hazelwood",
    description:
      "From the New York Times bestselling 'author' of The Love Hypothesis comes a new STEMinist rom-com in which a scientist, Bee Königswasser, is forced to work on a project with her nemesis, Levi Ward—with explosive results.",
    bookType: "Paperback",
    bookState: "want_to_read",
    inStock: false,
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1642069168l/59571699._SY475_.jpg",
    originalPrice: 472,
    discountPercent: 44,
    discountPrice: 207,
    totalRatings: 879,
    totalStars: 4.4,
  },
  {
    id: 4,
    title: "Why We Sleep: Unlocking the Power of Sleep and Dreams",
    author: "Matthew Walker",
    description:
      "Neuroscientist and sleep expert Matthew Walker provides a revolutionary exploration of sleep, examining how it affects every aspect of our physical and mental well-being. Charting the most cutting-edge scientific breakthroughs, and marshalling his decades of research and clinical practice, Walker explains how we can harness sleep to improve learning, mood and energy levels, regulate hormones, prevent cancer, Alzheimer's and diabetes, slow the effects of aging, and increase longevity. He also provides actionable steps towards getting a better night's sleep every night.",
    bookType: "Paperback",
    bookState: "current_read",
    inStock: true,
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556604137l/34466963._SY475_.jpg",
    originalPrice: 799,
    discountPercent: 15,
    discountPrice: 200,
    totalRatings: 129469,
    totalStars: 4.4,
  },
  {
    id: 5,
    title: "The Krishna Key",
    author: "Ashwin Sanghi",
    description:
      "Ashwin Sanghi brings you yet another exhaustively researched whopper of a plot, while providing an incredible alternative interpretation of the Vedic Age that will be relished by conspiracy buffs and thriller-addicts alike.\n\nHistorian Ravi Mohan Saini must breathlessly dash from the submerged remains of Dwarka and the mysterious lingam of Somnath to the icy heights of Mount Kailash, in a quest to discover the cryptic location of Krishna's most prized possession. From the sand-washed ruins of Kalibangan to a Vrindavan temple destroyed by Aurangzeb, Saini must also delve into antiquity to prevent a gross miscarriage of justice.",
    bookType: "Paperback",
    inStock: false,
    bookState: "current_read",
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1341289060l/15733523.jpg",
    originalPrice: 450,
    discountPercent: 2,
    discountPrice: 10,
    totalRatings: 19017,
    totalStars: 3.6,
  },
  {
    id: 6,
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "No matter your goals, Atomic Habits 'offers' a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    bookType: "Hardcover",
    bookState: "read",
    inStock: true,
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535115320l/40121378._SY475_.jpg",
    originalPrice: 999,
    discountPercent: 27,
    discountPrice: 300,
    totalRatings: 347170,
    totalStars: 4.6,
  },
  {
    id: 7,
    title: "Attitude Is Everything",
    author: "Jeff Keller",
    description:
      "This is a 'success manual' that gives readers a step by step plan for taking control of their lives and unleashing their incredible potential. The book consists of 12 Lessons that was used by 'author' Jeff Keller to make a career transition from lawyer to motivational speaker. The book shows readers how they, too, can make positive changes in every area of their lives.",
    bookType: "Paperback",
    inStock: true,
    bookState: "want_to_read",
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1482649723l/33561786._SY475_.jpg",
    originalPrice: 699,
    discountPercent: 14,
    discountPrice: 170,
    totalRatings: 2886,
    totalStars: 4.4,
  },
  {
    id: 8,
    title: "The Book Theif",
    author: "Markus Zusak",
    description:
      "It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will be busier still.\n\nBy her brother's graveside, Liesel's life is changed when she picks up a single object, partially hidden in the snow. It is The Gravedigger's Handbook, left behind there by accident, and it is her first act of book thievery. So begins a love affair with books and words, as Liesel, with the help of her accordian-playing foster father, learns to read. Soon she is stealing books from Nazi book-burnings, the mayor's wife's library, wherever there are books to be found.\n\nBut these are dangerous times. When Liesel's foster family hides a Jew in their basement, Liesel's world is both opened up, and closed down.",
    bookType: "Paperback",
    inStock: true,
    bookState: "read",
    coverImg:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522157426l/19063._SY475_.jpg",
    originalPrice: 799,
    discountPercent: 29,
    discountPrice: 230,
    totalRatings: 2143296,
    totalStars: 4.4,
  },
];
