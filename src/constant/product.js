import { reviews } from './data';

export const Products = [
    {
        id: 1,
        name: 'USFJ Shirt',
        category: 'T-Shirt',
        description:
            "Experience the comfort and style of our USFJ Shirt. Made from high-quality materials, this shirt is designed to keep you feeling fresh and confident all day long. With its classic design and vibrant colors, it's perfect for casual outings or everyday wear. Whether you're running errands, attending a sporting event, or just lounging around, this shirt is sure to become your new favorite. Pair it with your favorite jeans or shorts for a look that's both stylish and comfortable.",
        details:
            'Our USFJ Shirt is crafted from a blend of 60% cotton and 40% polyester, ensuring a soft and breathable wear. The relaxed fit and crew neckline provide a comfortable silhouette, while the vibrant colors and subtle branding details add a touch of style. This shirt is perfect for anyone looking for a versatile and easy-to-wear addition to their wardrobe.',
        size: ['M', 'L', 'XL'],
        images: ['/shirt.png', '/shirt.png', '/shirt.png'],
        price: '50.50',
        discount_price: '45.50',
        sponsor: 'USFJ',
        reviews: 4.5,
        total_reviews: 7,
        product_id: 'prod_SFw4JfUGtWCrK8',
    },
    {
        id: 2,
        name: 'USFJ Bag',
        category: 'Bags',
        description:
            'Carry your essentials in style with our USFJ Bag. Made from durable materials, this bag is designed to withstand daily use while keeping your belongings organized and within reach. Perfect for school, work, or travel, this bag is a must-have for anyone on-the-go.',
        details:
            "Our USFJ Bag features a spacious interior with multiple compartments, including a dedicated laptop sleeve and several pockets for smaller items. The sturdy straps and reinforced seams ensure durability, while the sleek design and vibrant colors make it a fashionable accessory. Whether you're heading to class, the office, or a weekend getaway, this bag has got you covered.",
        size: ['M', 'L', 'XL'],
        images: [
            '/categories-bag.png',
            '/categories-bag.png',
            '/categories-bag.png',
        ],
        price: '15.50',
        discount_price: '10.50',
        sponsor: 'USFJ',
        reviews: 4.5,
        total_reviews: 12,
        product_id: 'prod_SIdRMpyTCUx8XZ',
    },
    {
        id: 3,
        name: 'USFJ Mug',
        category: 'Mugs',
        description:
            'Start your day off right with our USFJ Mug. Perfect for coffee, tea, or any other hot beverage, this mug is designed to keep your drinks at the perfect temperature while adding a touch of style to your morning routine.',
        details:
            "Our USFJ Mug is crafted from high-quality ceramic, ensuring a durable and long-lasting product. The vibrant colors and subtle branding details add a touch of personality to your morning coffee, while the comfortable handle and balanced design make it easy to hold and sip from. Whether you're a coffee connoisseur or a tea enthusiast, this mug is the perfect addition to your daily routine.",
        images: ['/mug.png', '/mug.png', '/mug.png'],
        price: '15.50',
        discount_price: '5.00',
        sponsor: 'USFJ',
        reviews: 4.5,
        total_reviews: 30,
        product_id: 'prod_SIdXrz0PIyUN5I',
    },
    {
        id: 4,
        name: 'USFJ Cap',
        category: 'Caps',
        description:
            'Add a touch of style to your outdoor adventures with our USFJ Cap. Perfect for hiking, camping, or just lounging in the park, this cap is designed to keep the sun out of your eyes while adding a touch of flair to your outfit.',
        details:
            "Our USFJ Cap features a durable design with a sturdy brim and adjustable strap in the back. The vibrant colors and subtle branding details add a touch of personality to your outdoor look, while the breathable materials ensure a comfortable wear even on the hottest days. Whether you're hitting the trails or just enjoying a picnic, this cap is the perfect accessory.",
        images: ['/cap.png', '/cap.png', '/cap.png'],
        price: '45.00',
        discount_price: '35.50',
        sponsor: 'USFJ',
        reviews: 4.5,
        total_reviews: 4,
        product_id: 'prod_SIdZz5J6xjlI3q',
    },
    {
        id: 5,
        name: 'USFJ Pen',
        category: 'Pens',
        description:
            'Write in style with our USFJ Pen. Perfect for students, professionals, or anyone who loves to write, this pen is designed to provide a smooth writing experience while adding a touch of flair to your desk or bag.',
        details:
            "Our USFJ Pen features a sleek design with a comfortable grip and smooth ink flow. The vibrant colors and subtle branding details add a touch of personality to your writing experience, while the durable construction ensures a long-lasting product. Whether you're taking notes, signing documents, or creating art, this pen is the perfect tool.",
        color: ['Red', 'Blue', 'Black'],
        images: [
            '/USfJ_Pen.avif',
            '/USfJ_Pen_2.avif',
            '/USfJ_Pen_4.webp',
            '/USfJ_Pen_3.webp',
        ],
        price: '10.50',
        discount_price: '7.55',
        sponsor: 'USFJ',
        reviews: 4.5,
        total_reviews: 47,
        product_id: 'prod_SIda6Sz4gso7yI',
    },
];

export const productsCategories = [
    {
        category: 'T-Shirts',
    },
    {
        category: 'Caps ',
    },

    {
        category: 'Mugs',
    },
    {
        category: 'Pens',
    },
    {
        category: 'Bags',
    },
];
