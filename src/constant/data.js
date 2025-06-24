import { TiDocumentText } from 'react-icons/ti';
import { AiFillPicture } from 'react-icons/ai';
import { IoMdMusicalNote } from 'react-icons/io';
import { MdMovie } from 'react-icons/md';
import { FaFileArchive } from 'react-icons/fa';
import {
    AnimalIcon,
    ArtIcon,
    DistarterIcon,
    EducationIcon,
    FoodIcon,
    MedicalIcon,
    SportIcon,
} from '../../public/SVGs/AllSvgs';
import { ChurchIcon } from 'lucide-react';

export const EventsData = [
    {
        id: 1,
        name: 'Prayer Session',
        date: 'Saturday, 10 June 2025',
        members: '180 members',
        image: '/Rectangle 801.png',
        location: 'virtual',
        time: '10:00 AM',
        link: 'https://meet.google.com/cqg-xgof-nzh',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        id: 2,
        name: 'Community Seminar',
        date: 'Sunday, 11 June 2025',
        members: '621 Members',
        image: '/Rectangle 802.png',
    },
    {
        id: 3,
        name: 'Workshop Event',
        date: 'Monday, 12 June 2025',
        members: '142 Members',
        image: '/Rectangle 803 (1).png',
    },
    {
        id: 4,
        name: 'Workshop Event',
        date: 'Monday, 12 June 2025',
        members: '142 Members',
        image: '/Rectangle 803.png',
    },
];

export const MeetingsData = [
    {
        id: 1,
        avatar: '/Ellipse 47.png',
        name: 'Counseling Session',
        date: 'Friday, 23 Nov 2024',
        type: 'Zoom Meeting',
        author: 'Profesor Astuti S',
    },
    {
        id: 2,
        avatar: '/Ellipse 47.png',
        name: 'Counseling Session',
        date: 'Friday, 23 Nov 2024',
        type: 'Zoom Meeting',
        author: 'Profesor Astuti S',
    },
    {
        id: 3,
        avatar: '/Ellipse 47.png',
        name: 'Counseling Session',
        date: 'Friday, 23 Nov 2024',
        type: 'Zoom Meeting',
        author: 'Profesor Astuti S',
    },
    {
        id: 4,
        avatar: '/Ellipse 47.png',
        name: 'Counseling Session',
        date: 'Friday, 23 Nov 2024',
        type: 'Zoom Meeting',
        author: 'Profesor Astuti S',
    },
];

export const data = [
    {
        id: 1,
        title: 'Monthly Administrative Support',
        img: '/Images.png',
    },
    {
        id: 2,
        title: 'Housing Construction Support',
        img: '/Images.jpg',
    },
    {
        id: 3,
        title: 'Payment of Salaries',
        img: '/Images (1).jpg',
    },
    {
        id: 4,
        title: 'Monthly Administrative Support',
        img: '/Images (3).jpg',
    },
    {
        id: 5,
        title: 'Housing Construction Support',
        img: '/Images (2).jpg',
    },
    {
        id: 6,
        title: 'Payment of Salaries',
        img: '/Images (4).jpg',
    },
];

export const upcoming = [
    {
        date: 'Today',
        description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
        date: 'Monday, 22 Mar 2021',
        description: 'Jeffrey Reid’s birthday',
    },
    {
        date: 'Today',
        description: 'Lorem ipsum dolor sit amet consectetur. Ac.',
    },
];

export const messages = [
    {
        name: 'Den Yili',
        avatar: '/Ellipse 5 (1).svg',
    },
    {
        name: 'Mulick Abimana',
        avatar: '/Ellipse 5 (2).svg',
    },
    {
        name: 'Micheal Richard',
        avatar: '/Ellipse 5 (3).svg',
    },
    {
        name: 'Damilola Gbami',
        avatar: '/Ellipse 5.svg',
    },
];

export const counsel = [
    'Marriage',
    'Schooling',
    'Spiritual Growth',
    'Career',
    'Finances',
];

export const channels = ['😻 Job Posting'];

export const general = [
    '👋 Community Request',
    '😂 Volunteer Activities',
    '👍 Images and Gallery',
];

export const prayers = ['Nation', 'Job', 'Growth', 'Finances'];

export const files = [
    {
        id: '1',
        title: 'Citation Cover.docx',
        size: '1.2 MB',
        icon: <TiDocumentText size={26} />,
    },
    {
        id: '2',
        title: 'sample.png',
        size: '1MB',
        icon: <AiFillPicture size={26} />,
    },
    {
        id: '3',
        title: 'latest audio edit.mp3',
        size: '2MB',
        icon: <IoMdMusicalNote size={26} />,
    },
    {
        id: '4',
        title: 'one piece movie.mp4',
        size: '1.8 MB',
        icon: <MdMovie size={26} />,
    },
    {
        id: '5',
        title: 'one piece batch 1.zip',
        size: '1.8 GB',
        icon: <FaFileArchive size={26} />,
    },
];

export const members = [
    {
        name: 'Den Yili',
        avatar: '/Ellipse 5 (1).svg',
        status: 'Volunteer',
        email: 'den.yili@example.com',
        phone: '+234 901 234 5678',
    },
    {
        name: 'Mulick Abimana',
        avatar: '/Ellipse 5 (2).svg',
        status: 'Volunteer',
        email: 'mulick.abimana@example.com',
        phone: '+234 803 456 7890',
    },
    {
        name: 'Micheal Richard',
        avatar: '/Ellipse 5 (3).svg',
        status: 'Staff',
        email: 'michael.richard@example.com',
        phone: '+234 806 789 1234',
    },
    {
        name: 'Damilola Gbami',
        avatar: '/Ellipse 5.svg',
        status: 'Staff',
        email: 'damilola.gbami@example.com',
        phone: '+234 812 345 6789',
    },
];

export const tasks = [
    {
        title: 'Lorem ipsum',
        description:
            'Sed id sed diam sed. Tincidunt a odio tellus ultrices. Fermentum enim tellus massa diam.',
        date: 'Today',
        active: true, // Mark this task as active
    },
    {
        title: 'Lorem ipsum dolor sit',
        description:
            'Oops, lorem ipsum dolor sit amet consectetur. Incididunt ut labore et dolore magna aliqua.',
        date: '19 Feb 2021',
        active: false, // Inactive
    },
    {
        title: 'Lorem ipsum dolor sit',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt.',
        date: '19 Feb 2021',
        active: false,
    },
    {
        title: 'Lorem ipsum dolor sit',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt.',
        date: '19 Feb 2021',
        active: false,
    },
];

export const images = [
    '/images/Image 1 (6).png',
    '/images/Image 2 (4).jpg',
    '/images/Image 3 (1).jpg',
    '/images/Image 4.jpg',
];

// pages data

export const mission = [
    [
        {
            title: '',
            text: 'Our mission is to foster a community where our shared faith drives action. Together, we extend Christ’s love by serving others, and strengthening our bonds as we work hand in hand to make a difference in our local community, the state of Kentucky, and throughout the world.',
        },
        {
            title: '',
            text: 'We are also committed to providing a nurturing and secure shelter for young adults aging out of foster care, where they can learn essential life skills and cultivate independence..',
        },
        {
            title: '',
            text: 'Through our holistic approach, we aim to guide the young adults on their journey towards personal growth and self-sufficiency while offering spiritual support and leading them towards salvation.',
        },
        {
            title: '',
            text: 'We also aim to empower young adults and individuals in our community to overcome challenges, embrace their potential, and build a future grounded in faith and self-reliance.',
        },
    ],
    [
        {
            title: 'Christ’s Love in Action',
            text: 'Our vision is to be a beacon of Christ’s love, uniting believers through compassionate service and transformative action, making a lasting impact in our community and beyond.',
        },
        {
            title: 'Opportunities for All',
            text: 'We envision a world where every young adult in our community and in the state of Kentucky has the opportunity to thrive in a safe and supportive environment, equipped with the skills and faith needed for a fulfilling and independent life.',
        },
        {
            title: 'Inspiring Transformation',
            text: 'By combining practical lifeskills, and education with spiritual guidance, we aspire to inspire and transform lives, fostering a community where everyone can achieve their full potential and find salvation through a strong foundation of faith and personal growth.',
        },
    ],
    [
        {
            title: '',
            text: 'We believe the Bible is inspired by the Holy Spirit of God and that it is God’s only infallible, authoritative Word. We believe there is one God, eternally existent in three persons: God the Father, Jesus Christ the Son, and the Holy Spirit.',
        },
        {
            title: '',
            text: 'We believe in the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His vicarious and atoning death through His shed blood, in His bodily resurrection, in His ascension to the right hand of the Father, in his current roles as intercessor and advocate, and in His personal return in power and glory.',
        },
        {
            title: '',
            text: 'We believe that all people are sinful and separated from God and need to be born again by the Spirit; that this regeneration by the Holy Spirit is essential, and that this salvation is received through faith in Jesus Christ as Savior and Lord and not as a result of our good works.',
        },
        {
            title: '',
            text: 'We believe in the present ministry of the Holy Spirit by whose indwelling the Christian is enabled to live a godly life and empowers believers to perform good works.',
        },
        {
            title: '',
            text: 'We believe in the resurrection of life for those who are saved by Jesus and of the resurrection of the lost unto damnation.',
        },
        {
            title: '',
            text: 'We believe in the spiritual unity of believers in our Lord Jesus Christ. We are united in Faith as one body in Christ.',
        },
    ],
];

export const whatwedo = [
    [
        {
            text: 'Regular group sessions to explore and understand God’s word',
            title: 'Bible Studies',
        },
        {
            text: 'Personal, faith-based mentorship to help young adults grow spiritually and navigate life’s challenges.',
            title: 'Mentorship',
        },
        {
            text: 'A supportive environment where individuals can share prayer requests and seek encouragement.',
            title: 'Prayer Groups',
        },
    ],
    [
        {
            text: 'Learn how to budget, save, and manage finances responsibly.',
            title: 'Financial Management',
        },
        {
            text: 'Resume building, interview skills, and job search assistance to help you achieve your career goals',
            title: 'Career Development',
        },
        {
            text: 'Focus on self-discipline, time management, and goal setting to succeed in personal and professional life.',
            title: 'Personal Responsibility',
        },
    ],
    [
        {
            text: 'A nurturing, faith-based atmosphere where individuals can focus on their personal and spiritual growth.',
            title: 'Safe & Stable Environment',
        },
        {
            text: 'Regular meetings with life coaches to set goals and create action plans for success.',
            title: 'Life Coaching',
        },
        {
            text: 'Opportunities to engage with others in a supportive community of like-minded individuals.',
            title: 'Community Building',
        },
    ],
    [
        {
            text: 'One-on-one or group tutoring to help with schoolwork or exam preparation.',
            title: 'Tutoring',
        },
        {
            text: 'Guidance on college applications, scholarships, and financial aid.',
            title: 'College Preparation',
        },
        {
            text: 'Support for those looking to complete high school diplomas, GEDs, or pursue vocational training.',
            title: 'Adult Education',
        },
    ],
    [
        {
            text: 'Hands-on opportunities to serve local churches, non-profits, and community organizations.',
            title: 'Volunteer Programs',
        },
        {
            text: 'Participate in food drives, clothing donations, and other outreach efforts to support those in need.',
            title: 'Outreach Projects',
        },

        {
            text: 'Leadership roles in community projects to help participants build confidence and experience.',
            title: 'Leadership Development',
        },
    ],
    [
        {
            text: 'Counseling services and support groups to address mental health challenges and promote emotional well-being.',
            title: 'Emotional Support',
        },
        {
            text: 'Workshops on nutrition, physical fitness, and healthy living habits.',
            title: 'Health Education',
        },
        {
            text: 'Assistance for those struggling with substance abuse, providing them with the support they need to overcome addiction and rebuild their lives.',
            title: 'Substance Abuse Recovery',
        },
    ],
    [
        {
            text: 'Workshops on job searching, networking, and career advancement.',
            title: 'Job Readiness Training',
        },
        {
            text: 'Personalized support to craft professional resumes and practice interview skills.',
            title: 'Resume Building & Interview Preparation',
        },
        {
            text: 'Helping connect participants with job opportunities in their field of interest.',
            title: 'Job Placement Assistance',
        },
    ],
];

export const helpOthers = [
    {
        Icon: MedicalIcon,
        title: 'Medical',
        text: 'Sometimes features require a short description',
    },
    {
        Icon: FoodIcon,
        title: 'Food',
        text: 'Sometimes features require a short description',
    },
    {
        Icon: DistarterIcon,
        title: 'Disaster',
        text: 'Sometimes features require a short description',
    },
    {
        Icon: ArtIcon,
        title: 'Art and Culture',
        text: 'Sometimes features require a short description',
    },
    {
        Icon: EducationIcon,
        title: 'Education',
        text: 'Sometimes features require a short description',
    },
    {
        Icon: AnimalIcon,
        title: 'Animal',
        text: 'Sometimes features require a short description',
    },
    {
        Icon: SportIcon,
        title: 'Sport',
        text: 'Sometimes features require a short description',
    },

    {
        Icon: ChurchIcon,
        title: 'Church',
        text: 'Sometimes features require a short description',
    },
];

export const getInvolvedInPrayerGroup = [
    {
        image: 'praying.png',
        link: '/',
        text: 'Join a Local or Virtual Prayer Group',
    },
    {
        image: 'praying-1.png',
        link: '/',
        text: 'Submit a Prayer Request',
    },
    {
        image: 'praying-2.png',
        link: '/',
        text: 'Attend Prayer Gatherings',
    },
];

export const faqitem = [
    {
        title: 'What is United Servants for Jesus?',
        content:
            'United Servants for Jesus is a faith-based NGO dedicated to empowering young adults by providing a safe, nurturing environment where they can grow in faith, develop essential life skills, and build a strong foundation for a successful, independent future.',
        image: '/images/praying-1.png',
    },
    {
        title: 'How does your organization support young adults?',
        content:
            'United Servants for Jesus is a faith-based NGO dedicated to empowering young adults by providing a safe, nurturing environment where they can grow in faith, develop essential life skills, and build a strong foundation for a successful, independent future.',
        image: '/images/praying-2.png',
    },
    {
        title: 'Who can participate in your programs?',
        content:
            'United Servants for Jesus is a faith-based NGO dedicated to empowering young adults by providing a safe, nurturing environment where they can grow in faith, develop essential life skills, and build a strong foundation for a successful, independent future.',
        image: '/images/praying-1.png',
    },
    {
        title: 'How can I get involved or support your mission?',
        content:
            'United Servants for Jesus is a faith-based NGO dedicated to empowering young adults by providing a safe, nurturing environment where they can grow in faith, develop essential life skills, and build a strong foundation for a successful, independent future.',
        image: '/images/praying-2.png',
    },
];

export const insightData = [
    {
        image: 'insight.png',
        title: 'Lorem ipsum dolor  consectetur adipiscing elit, sed do',
        date: 'Dec 2024',
        link: '/',
        team: 'Micheal Babs',
    },
    {
        image: 'insight-2.png',
        title: 'Lorem ipsum dolor  consectetur adipiscing elit, sed do',
        date: 'Dec 2024',
        link: '/',
        team: 'USFJ',
    },
    {
        image: 'insight-3.png',
        title: 'Lorem ipsum dolor  consectetur adipiscing elit, sed do',
        date: 'Jan 2025',
        link: '/',
        team: 'Bible Team',
    },
    {
        image: 'insight-2.png',
        title: 'Lorem ipsum dolor  consectetur adipiscing elit, sed do',
        date: 'Dec 2024',
        link: '/',
        team: 'USFJ',
    },
];

import {
    BibleStudiesIcon,
    MentorshipIcon,
    PrayerGroupsIcon,
} from '../../public/SVGs/AllSvgs';

export const offerDummyData = [
    {
        icon: MentorshipIcon(),
        title: 'Mentorship',
        smallInfo: `Personal, faith-based mentorship to help young adults grow spiritually and navigate life’s challenges.`,
        path: '/',
    },
    {
        icon: BibleStudiesIcon(),
        title: 'Bible Studies',
        smallInfo: `Regular group sessions to explore and understand God’s word.`,
        path: '/',
    },
    {
        icon: PrayerGroupsIcon(),
        title: 'Prayer Groups',
        smallInfo: `A supportive environment where individuals can share prayer requests and seek encouragement.`,
        path: '/',
    },

    {
        icon: BibleStudiesIcon(),
        smallInfo:
            'Learn how to budget, save, and manage finances responsibly.',
        title: 'Financial Management',
        path: '/',
    },
    {
        icon: PrayerGroupsIcon(),
        smallInfo:
            'Resume building, interview skills, and job search assistance to help you achieve your career goals',
        title: 'Career Development',
        path: '/',
    },
    {
        icon: BibleStudiesIcon(),
        smallInfo:
            'Focus on self-discipline, time management, and goal setting to succeed in personal and professional life.',
        title: 'Personal Responsibility',
        path: '/',
    },

    {
        icon: PrayerGroupsIcon(),
        smallInfo:
            'A nurturing, faith-based atmosphere where individuals can focus on their personal and spiritual growth.',
        title: 'Safe & Stable Environment',
        path: '/',
    },
    {
        icon: PrayerGroupsIcon(),
        smallInfo:
            'Regular meetings with life coaches to set goals and create action plans for success',
        title: 'Life Coaching',
        path: '/',
    },
    {
        icon: PrayerGroupsIcon(),
        smallInfo:
            'Opportunities to engage with others in a supportive community of like-minded individuals.',
        title: 'Community Building',
        path: '/',
    },
    {
        icon: PrayerGroupsIcon(),
        smallInfo:
            'One-on-one or group tutoring to help with schoolwork or exam preparation.',
        title: 'Tutoring',
        path: '/',
    },
    {
        icon: PrayerGroupsIcon(),
        smallInfo:
            'Guidance on college applications, scholarships, and financial aid.',
        title: 'College Preparation',
        path: '/',
    },
    {
        icon: PrayerGroupsIcon(),
        smallInfo:
            'Support for those looking to complete high school diplomas, GEDs, or pursue vocational training.',
        title: 'Adult Education',
        path: '/',
    },
    {
        icon: PrayerGroupsIcon(),
        smallInfo:
            'Hands-on opportunities to serve local churches, non-profits, and community organizations.',
        title: 'Volunteer Programs',
        path: '/',
    },
    {
        icon: PrayerGroupsIcon(),
        smallInfo:
            'Participate in food drives, clothing donations, and other outreach efforts to support those in need.',
        title: 'Outreach Projects',
        path: '/',
    },
    {
        icon: PrayerGroupsIcon(),
        smallInfo:
            'Leadership roles in community projects to help participants build confidence and experience.',
        title: 'Leadership Development',
        path: '/',
    },
    {
        icon: PrayerGroupsIcon(),
        smallInfo:
            'Counseling services and support groups to address mental health challenges and promote emotional well-being.',
        title: 'Emotional Support',
        path: '/',
    },
    {
        icon: PrayerGroupsIcon(),
        smallInfo:
            'Workshops on nutrition, physical fitness, and healthy living habits.',
        title: 'Health Education',
        path: '/',
    },
    {
        icon: PrayerGroupsIcon(),
        smallInfo:
            'Assistance for those struggling with substance abuse, providing them with the support they need to overcome addiction and rebuild their lives.',
        title: 'Substance Abuse Recovery',
        path: '/',
    },
    {
        icon: PrayerGroupsIcon(),
        smallInfo:
            'Workshops on job searching, networking, and career advancement.',
        title: 'Job Readiness Training',
        path: '/',
    },
    {
        icon: PrayerGroupsIcon(),
        smallInfo:
            'Personalized support to craft professional resumes and practice interview skills.',
        title: 'Resume Building & Interview Preparation',
        path: '/',
    },
    {
        icon: PrayerGroupsIcon(),
        smallInfo:
            'Helping connect participants with job opportunities in their field of interest.',
        title: 'Job Placement Assistance',
        path: '/',
    },
];

export const executives = [
    {
        id: 0,
        name: 'Jeffrey Grounds',
        role: 'Chairperson',
        text: '“Our mission is not just to serve but to uplift, guiding hearts toward Christ with love and unwavering faith. True leadership is about seeing beyond the present, envisioning a future where every soul experiences the fullness of God’s grace.”',
        image: 'Jeff.webp',
    },
    {
        id: 1,
        name: 'Stacy Harris',
        role: 'Treasurer',
        text: '“True leadership is found in servanthood—when we walk in humility, we reflect the heart of Jesus. The greatest calling is to serve, not to be served, to love unconditionally, and to be a vessel of His peace”',
        image: 'Stacy.webp',
    },
    {
        id: 2,
        name: 'Marc Mabini',
        role: 'Community Engagement Ambassador',
        text: '“Strength is found in unity, and our faith is strongest when we serve together as one body in Christ. The Church was never meant to be a place of isolation, but a home where every heart is welcomed, every voice is heard, and every hand is joined in service.”',
        image: 'Marc.webp',
    },
    {
        id: 3,
        name: 'Victor Jikong',
        role: 'Organization Consultant',
        text: '“Every step in faith is a step toward transformation—our goal is to nurture, empower, and lead with grace. Growth in Christ is not a destination but a lifelong journey, and as stewards of His calling, we are entrusted with the responsibility to guide, teach, and cultivate an environment where faith flourishes.”',
        image: 'Victor.webp',
    },
];

export const reviews = [
    {
        id: 0,
        name: 'Emily Wilson',
        rating: 5,
        review: 'I have been attending USFJ for a few months now, and I must say it has been a life-changing experience. The community is so supportive and loving.',
        date: '2022-01-01',
        image: '',
        productname: 'Product 1',
    },
    {
        id: 1,
        name: 'Michael Brown',
        rating: 5,
        review: "The Bible studies at USFJ have helped me deepen my understanding of God's word. The leaders are knowledgeable and passionate about their faith.",
        date: '2022-02-15',
        image: '',
        productname: 'Product 2',
    },
    {
        id: 2,
        name: 'Sarah Lee',
        rating: 4,
        review: 'I was hesitant to join a new church, but USFJ has been a great fit for me. The worship services are uplifting and the people are friendly.',
        date: '2022-03-20',
        image: '',
        productname: 'Product 3',
    },
    {
        id: 3,
        name: 'John Doe',
        rating: 5,
        review: 'USFJ has been a blessing to my family and me. The prayer groups have been a source of comfort and strength during difficult times.',
        date: '2022-04-10',
        image: '',
        productname: 'Product 4',
    },
    {
        id: 4,
        name: 'Jane Smith',
        rating: 4,
        review: 'I have been impressed by the community outreach programs at USFJ. They truly care about making a positive impact in the community.',
        date: '2022-05-01',
        image: '',
        productname: 'Product 5',
    },
];
