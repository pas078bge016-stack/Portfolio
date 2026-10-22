// ====================================
// PORTFOLIO DATA — Edit this file to update your portfolio!
// No need to touch index.html at all.
// ====================================

const PORTFOLIO_DATA = {

    // ─── HERO SECTION ───
    hero: {
        name: "Dipendra Thakur",
        tagline: "Geomatics Engineer · Researcher · Educator",
        subtitle: "Geomatics Researcher · GIS Developer · Educator",
        description: "Exploring geospatial intelligence through GPS analysis, photogrammetry, mapping systems, and research-driven digital solutions for real-world impact.",
        expertise: ["GIS", "GNSS", "UAV", "Photogrammetry", "Remote Sensing", "Spatial Analytics"],
        image: "profile.jpg",
        buttons: [
            { text: "View Projects", icon: "fas fa-rocket", href: "#projects", style: "" },
            { text: "Publications", icon: "fas fa-newspaper", href: "#publications", style: "background: transparent; border: 2px solid white;" },
            { text: "Download CV", icon: "fas fa-download", href: "#cv-download", style: "", class: "download-cv" }
        ]
    },

    // ─── ABOUT SECTION ───
    about: {
        image: "new image.jpg",
        gallery: [
            { image: "image.jpg", alt: "Dipendra Thakur carrying out a total station survey", caption: "Surveying in the field", detail: "Precision instruments. Real-world coordinates." },
            { image: "11.jpg", alt: "Dipendra Thakur exploring a landmark in Nepal", caption: "Mapping place & perspective", detail: "Every landscape has a story to map." },
            { image: "new image.jpg", alt: "Dipendra Thakur overlooking the Kathmandu valley", caption: "Above the Kathmandu valley", detail: "Field days, new vantage points." }
        ],
        paragraphs: [
            "I am Dipendra, a passionate Geomatics Engineer with a strong foundation in spatial data analysis, mapping, and digital surveying. My academic journey has shaped my skills in ArcGIS, QGIS, Pix4D, and various photogrammetry and database management tools.",
            "I have worked on several geospatial projects, including the Digitization Project at NAXA, where I contributed to building and updating geodatabases, digitizing buildings, and managing spatial datasets. I have also gained practical experience through internships in drone ecosystem research, geo-database management, and multihazard risk assessment.",
            "Alongside my technical background, I am also a teacher, guiding students in Mathematics and Physics. Teaching allows me to connect with learners, simplify complex concepts, and share my love for discovery and problem-solving.",
            "I believe that every map tells a story and every dataset holds potential for change. My goal is to combine my analytical skills and creative approach to contribute meaningfully to the field of geomatics and spatial innovation."
        ]
    },

    // ─── SKILLS SECTION ───
    skillsIntro: [
        {
            title: "Spatial Strategy",
            icon: "fas fa-compass",
            text: "I build geospatial solutions that connect technical accuracy with real-world impact — from field data to meaningful spatial insight."
        },
        {
            title: "Field & Technical Execution",
            icon: "fas fa-map-marked-alt",
            text: "My work spans GIS, remote sensing, photogrammetry, and digital mapping, with strong hands-on experience in ArcGIS, QGIS, and Pix4D."
        },
        {
            title: "Creative Communication",
            icon: "fas fa-photo-video",
            text: "I combine visual storytelling, video editing, and presentation design to make complex geospatial ideas easier to understand and more engaging."
        },
        {
            title: "Teaching & Mentorship",
            icon: "fas fa-chalkboard-teacher",
            text: "As a Mathematics and Physics educator, I help learners build confidence through clear explanations, patient guidance, and practical problem solving."
        }
    ],

    skills: [
        {
            title: "GIS & Remote Sensing",
            icon: "fas fa-map",
            items: [
                { name: "ArcGIS", level: 90 },
                { name: "QGIS", level: 85 },
                { name: "Pix4D", level: 80 },
                { name: "Photogrammetry", level: 75 }
            ]
        },
        {
            title: "Data Management",
            icon: "fas fa-database",
            items: [
                { name: "Digitization", level: 85 },
                { name: "Geo-Database Management", level: 80 },
                { name: "Drone Data Processing", level: 75 }
            ]
        },
        {
            title: "Teaching",
            icon: "fas fa-chalkboard-teacher",
            items: [
                { name: "Mathematics", level: 90 },
                { name: "Physics", level: 85 },
                { name: "Educational Content Creation", level: 80 }
            ]
        }
    ],

    // ─── TEACHING STATS ───
    teachingStats: [
        { icon: "fas fa-user-graduate", target: 2500, label: "Students Taught" },
        { icon: "fas fa-chalkboard", target: 5000, label: "Teaching Hours" },
        { icon: "fas fa-award", target: 95, label: "Success Rate (%)" },
        { icon: "fas fa-book", target: 120, label: "Topics Covered" }
    ],
    teachingHighlights: [
        {
            title: "Interactive Learning",
            text: "Lessons designed to make mathematics, physics, and geospatial concepts feel practical and motivating.",
            icon: "fas fa-brain"
        },
        {
            title: "Student Confidence",
            text: "Focus on step-by-step understanding so learners feel capable, not overwhelmed.",
            icon: "fas fa-hands-helping"
        },
        {
            title: "Visual Problem Solving",
            text: "I use diagrams, examples, and modern visuals to make complex ideas easier to grasp.",
            icon: "fas fa-chart-line"
        }
    ],
    studentTestimonials: [
        {
            name: "Aarav P.",
            role: "Student",
            quote: "Dipendra sir made difficult concepts feel simple and enjoyable. His teaching style is calm, clear, and encouraging."
        },
        {
            name: "Ritika S.",
            role: "Learner",
            quote: "I improved a lot in both confidence and performance because every topic was explained with patience and clarity."
        },
        {
            name: "Nishan K.",
            role: "Student",
            quote: "His way of combining logic, visuals, and real-life examples made learning feel meaningful and exciting."
        }
    ],

    // ─── EXPERIENCE / TIMELINE ───
    experience: [
        {
            date: "2019 - Present",
            chapter: "The beginning",
            title: "Mathematics & Physics Tutor",
            icon: "fas fa-chalkboard-teacher",
            iconColor: "var(--secondary)",
            description: "Teaching Mathematics and Physics to students up to grade 12, helping them understand complex concepts and improve their problem-solving skills."
        },
        {
            date: "2020 - 2021",
            chapter: "Mapping foundations",
            title: "Municipal Geodatabase Development Project",
            icon: "fas fa-map-marked-alt",
            iconColor: "var(--accent)",
            description: "Participated in projects assessing Municipal Geodatabase Development Project."
        },
        {
            date: "2021 - 2022",
            chapter: "Data foundations",
            title: "Geo Database Management",
            icon: "fas fa-database",
            iconColor: "var(--secondary)",
            description: "Managed geospatial databases, ensuring data integrity and accessibility for various projects."
        },
        {
            date: "2022 - 2023",
            chapter: "A new perspective",
            title: "Drone Ecosystem Research",
            icon: "fas fa-helicopter",
            iconColor: "var(--accent)",
            description: "Conducted research using drone technology for ecosystem analysis and environmental monitoring."
        },
        {
            date: "2023 - Present",
            chapter: "Field to data",
            title: "Digitization Project",
            icon: "fas fa-draw-polygon",
            iconColor: "var(--secondary)",
            description: "Worked on the Digitization Project at NAXA, contributing to building and updating geodatabases, digitizing buildings, and managing spatial datasets."
        },
        {
            date: "2024 - Present",
            chapter: "Reading the moving Earth",
            title: "Nepal GPS Crustal Deformation Analysis",
            icon: "fas fa-satellite",
            iconColor: "var(--accent)",
            description: "Developed a comprehensive interactive web-based geospatial analysis system for studying tectonic plate collision and ground movement in the Nepal Himalaya using GPS and geodetic survey data. Features include velocity mapping, strain rate calculation, earthquake hazard visualization, and time series analysis using real data from Nevada Geodetic Laboratory and UNAVCO."
        },
        {
            date: "2025",
            chapter: "Research in the world",
            title: "Published Research Article",
            icon: "fas fa-newspaper",
            iconColor: "var(--secondary)",
            description: "Authored a research article published in <strong>Geomatics World Magazine</strong> on GPS-based crustal deformation analysis and Himalayan geodynamics. The publication reflects deep analytical capability, research-oriented thinking, and the ability to bridge theoretical geomatics concepts with real-world geospatial applications."
        },
        {
            date: "2025",
            chapter: "Ideas into impact",
            title: "HackFast — First Prize Winner",
            icon: "fas fa-trophy",
            iconColor: "#ffd700",
            description: "Achieved <strong>First Prize Winner</strong> position at HackFast by presenting DisasterReady — a Live Emergency Evacuation System with real-time disaster response, shelter management, and evacuation route planning. Demonstrated innovation, teamwork, technical leadership, and the ability to transform ideas into impactful solutions."
        }
    ],

    // ─── MEDIA SHOWCASE ───
    media: {
        heading: "Premium Video Showcase",
        intro: "A curated collection of my fieldwork, geospatial storytelling, and technical demonstrations — designed to feel immersive, modern, and professionally polished.",
        featuredVideos: [
            {
                title: "Compass Survey Fieldwork",
                category: "Field Survey",
                description: "A closer look at my practical surveying workflow, precision fieldwork, and the way field data becomes meaningful spatial insight.",
                videoUrl: "https://www.youtube.com/embed/hoRgeDhDZMQ",
                watchUrl: "https://youtu.be/hoRgeDhDZMQ",
                thumbnail: "https://img.youtube.com/vi/hoRgeDhDZMQ/hqdefault.jpg"
            },
            {
                title: "Photogrammetry & Spatial Innovation",
                category: "Geospatial Storytelling",
                description: "A deeper look into my photogrammetry workflow, visual storytelling, and the technical thinking behind modern mapping and remote sensing projects.",
                videoUrl: "https://www.youtube.com/embed/QJ36YSzUv5U",
                watchUrl: "https://youtu.be/QJ36YSzUv5U",
                thumbnail: "https://img.youtube.com/vi/QJ36YSzUv5U/hqdefault.jpg"
            }
        ],
        channelVideos: [
            {
                title: "Research & GIS Showcase",
                description: "A complete walkthrough of my geospatial and research-oriented work, presented in a clear and engaging way.",
                videoUrl: "https://youtu.be/QJ36YSzUv5U",
                thumbnail: "https://img.youtube.com/vi/QJ36YSzUv5U/hqdefault.jpg"
            },
            {
                title: "Field Survey & Mapping Workflow",
                description: "A practical view into survey discipline, field precision, and the way geospatial data is shaped from real-world observations.",
                videoUrl: "https://youtu.be/hoRgeDhDZMQ",
                thumbnail: "https://img.youtube.com/vi/hoRgeDhDZMQ/hqdefault.jpg"
            }
        ],
        researchArticle: {
            title: "Published Research Article",
            description: "Read and download my published research paper focused on geospatial analysis, crop-related mapping, and applied spatial insight.",
            file: "Crop article.pdf",
            readText: "Read Article",
            downloadText: "Download PDF"
        }
    },

    // ─── PROJECTS ───
    projects: [
        {
            title: "Nepal GPS Crustal Deformation Analysis",
            description: "Interactive web-based analysis system for studying tectonic plate collision and ground movement in Nepal Himalaya using real GPS data from Nevada Geodetic Laboratory & UNAVCO.",
            icon: "fas fa-satellite",
            gradient: "linear-gradient(135deg, #1a1f36, #2d3a8c, #4f6df5)",
            tags: ["GPS Analysis", "Leaflet.js", "Chart.js", "Geodesy", "Tectonics"],
            link: "https://dipendrathak.github.io/Nepal-GPS-Crustal-Deformation/",
            featured: true,
            badgeText: "Featured",
            badgeIcon: "fas fa-star"
        },
        {
            title: "DisasterReady — HackFast Winner",
            description: "Live Emergency Evacuation System with real-time disaster response, shelter management, evacuation route planning, and resource tracking. First Prize at HackFast hackathon.",
            icon: "fas fa-shield-alt",
            gradient: "linear-gradient(135deg, #ff6b35, #f7931e, #ffd700)",
            tags: ["Emergency System", "Real-time Maps", "Hackathon", "GIS"],
            link: "https://dipendrathak.github.io/Hackfast-project-idea/",
            featured: true,
            badgeText: "1st Prize",
            badgeIcon: "fas fa-trophy"
        },
        {
            title: "Digitization Project",
            description: "Building and updating geodatabases, digitizing buildings, and managing spatial datasets for NAXA.",
            icon: "fas fa-map-marked-alt",
            gradient: "linear-gradient(45deg, var(--primary), var(--secondary))",
            tags: ["ArcGIS", "QGIS", "Database Management"],
            link: "",
            featured: false
        },
        {
            title: "Drone Ecosystem Research",
            description: "Using drone technology and photogrammetry for environmental monitoring and ecosystem analysis.",
            icon: "fas fa-drone",
            gradient: "linear-gradient(45deg, var(--primary), var(--secondary))",
            tags: ["Pix4D", "Photogrammetry", "Drone Data"],
            link: "",
            featured: false
        },
        {
            title: "Municipal Geodatabase Development Project",
            description: "Assessing multi-hazard risks using geospatial analysis techniques and creating risk maps.",
            icon: "fas fa-exclamation-triangle",
            gradient: "linear-gradient(45deg, var(--primary), var(--secondary))",
            tags: ["Risk Assessment", "Spatial Analysis", "GIS"],
            link: "",
            featured: false
        },
        {
            title: "Augmented Reality App",
            description: "Final year project developing an augmented reality application for geospatial visualization.",
            icon: "fas fa-vr-cardboard",
            gradient: "linear-gradient(45deg, var(--primary), var(--secondary))",
            tags: ["Augmented Reality", "Solo Project", "Innovation"],
            link: "https://dipendrathak.github.io/AR-project/",
            featured: false
        },
        {
            title: "ArcGIS Project",
            description: "A comprehensive GIS project showcasing spatial analysis and mapping capabilities.",
            icon: "fas fa-globe",
            gradient: "linear-gradient(45deg, var(--primary), var(--secondary))",
            tags: ["ArcGIS", "Spatial Analysis", "Web GIS"],
            link: "https://dipendrathak.github.io/ArcGisByDIpendra",
            featured: false
        }
    ],

    // ─── PUBLICATIONS ───
    publications: [
        {
            badge: "Published",
            title: "GPS-Based Crustal Deformation Analysis in the Nepal Himalaya: Insights from Geodetic Monitoring and Tectonic Movement Interpretation",
            journal: "Geomatics World Magazine",
            description: "This publication reflects my interest in using geospatial science, GPS observations, and tectonic monitoring to understand crustal movement in the Nepal Himalaya. It combines scientific analysis with practical interpretation to connect geodetic data with regional hazard understanding and geodynamic insight.",
            topics: ["GPS Data Analysis", "Crustal Deformation", "Himalayan Geodynamics", "Geodetic Monitoring", "Tectonic Movements", "Strain Analysis", "Seismic Hazard"],
            link: "Crop article.pdf",
            linkText: "Read the Published Article"
        }
    ],

    // ─── ACHIEVEMENTS ───
    achievements: [
        {
            title: "Research Excellence in Geomatics",
            description: "Recognized for combining scientific research, geospatial analysis, and modern digital presentation to communicate meaningful findings in the field of geomatics and geodynamics.",
            iconClass: "fas fa-microscope",
            iconType: "research",
            year: "2025"
        },
        {
            title: "Published Research Author",
            description: "Authored and published a research article in Geomatics World Magazine on GPS-based crustal deformation analysis and Himalayan geodynamics — bridging academic research with practical geospatial technology and scientific communication.",
            iconClass: "fas fa-newspaper",
            iconType: "research",
            year: "2025"
        },
        {
            title: "Geospatial Innovation Leader",
            description: "Developed comprehensive interactive web-based geospatial portfolio projects combining GPS analysis, spatial data visualization, earthquake hazard mapping, and scientific communication through modern web technologies.",
            iconClass: "fas fa-lightbulb",
            iconType: "innovation",
            year: "2024 - Present"
        }
    ],

    // ─── EDUCATION ───
    education: [
        {
            degree: "Bachelor's in Geomatics Engineering",
            period: "2022 - Present",
            institution: "IOE Paschimanchal Campus, Pokhara",
            description: "Currently pursuing a Bachelor's degree in Geomatics Engineering with a focus on spatial data analysis, mapping, and surveying technologies."
        },
        {
            degree: "High School Degree",
            period: "Completed",
            institution: "Mithila Institute of Technology (MIT) Janakpur",
            description: "Completed higher secondary education with a focus on Science, Mathematics, and Physics."
        }
    ],

    // ─── PORTFOLIO DOCUMENTS ───
    documents: [
        { title: "Bachelor's Character Certificate", category: "Geomatics Engineering", file: "bachelor character.pdf", icon: "fas fa-award" },
        { title: "Bachelor's Transcript", category: "Geomatics Engineering", file: "trasnscipt bachelor.pdf", icon: "fas fa-graduation-cap" },
        { title: "Provisional Certificate", category: "Geomatics Engineering", file: "provisional.pdf", icon: "fas fa-certificate" },
        { title: "Class 12 Character Certificate", category: "Higher Secondary", file: "class 12 character.pdf", icon: "fas fa-award" },
        { title: "Class 12 Transcript", category: "Higher Secondary", file: "class 12 th transcipt.pdf", icon: "fas fa-file-lines" },
        { title: "SEE Marksheet", category: "Secondary Education", file: "SEE Marksheet.pdf", icon: "fas fa-file-lines" },
        { title: "SLC Character Certificate", category: "Secondary Education", file: "chatacter slc.pdf", icon: "fas fa-award" },
        { title: "Curriculum Vitae", category: "Resume", file: "CV.pdf", icon: "fas fa-briefcase" },
        { title: "Published Research Article", category: "Research", file: "Crop article.pdf", icon: "fas fa-book-open" }
    ],

    // ─── CONTACT ───
    contact: {
        email: "thakurnikee47@gmail.com",
        phone: "9824177549",
        whatsapp: "9779824177549",
        location: "Bathanaha/ Manara, Shiswa municipality - 09, Mahottari",
        socialLinks: [
            { href: "https://www.facebook.com/", icon: "fab fa-facebook", title: "Facebook" },
            { href: "https://youtube.com/%40DipendarThakur-iu7np", icon: "fab fa-youtube", title: "YouTube" },
            { href: "https://dipendrathak.github.io/ArcGisByDIpendra", icon: "fas fa-map", title: "ArcGIS Project" },
            { href: "https://dipendrathak.github.io/AR-project/", icon: "fas fa-vr-cardboard", title: "AR Project" }
        ]
    },

    // ─── FOOTER ───
    footer: {
        copyright: "Dipendra Thakur. All Rights Reserved.",
        tagline: "Geomatics Engineer • Researcher • Teacher • Spatial Storyteller",
        socialLinks: [
            { href: "https://www.facebook.com/", icon: "fab fa-facebook", title: "Facebook" },
            { href: "https://youtube.com/%40DipendarThakur-iu7np", icon: "fab fa-youtube", title: "YouTube" },
            { href: "https://github.com/dipendrathak", icon: "fab fa-github", title: "GitHub" },
            { href: "https://dipendrathak.github.io/Nepal-GPS-Crustal-Deformation/", icon: "fas fa-satellite", title: "GPS Research" },
            { href: "https://dipendrathak.github.io/ArcGisByDIpendra", icon: "fas fa-map", title: "ArcGIS Project" },
            { href: "https://dipendrathak.github.io/AR-project/", icon: "fas fa-vr-cardboard", title: "AR Project" }
        ]
    }
};
