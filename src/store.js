import { reactive } from "vue";

export const store = reactive({
    visionArray: [
        {
            icon: "fa-solid fa-database",
            title: "Virtual Documents",
            text: "Mi chiamo Massimo Decimo Meridio, comandante dell'esercito del nord, generale delle legioni Felix, servoleale dell'unico vero imperatore Marco Aurelio"
        },
        {
            icon: "fa-solid fa-sack-dollar",
            title: "Flexible Payment",
            text: "Mi chiamo Massimo Decimo Meridio, comandante dell'esercito del nord, generale delle legioni Felix, servoleale dell'unico vero imperatore Marco Aurelio"
        },
        {
            icon: "fa-solid fa-gauge-high",
            title: "SEO Tools",
            text: "Mi chiamo Massimo Decimo Meridio, comandante dell'esercito del nord, generale delle legioni Felix, servoleale dell'unico vero imperatore Marco Aurelio"
        },
        {
            icon: "fa-solid fa-palette",
            title: "UI Design",
            text: "Mi chiamo Massimo Decimo Meridio, comandante dell'esercito del nord, generale delle legioni Felix, servoleale dell'unico vero imperatore Marco Aurelio"
        },
    ],
    imgAbout: [
        {
            imgUrl: "https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-142@2x-443x424.png",
            name: "Alessandra Pinili",
            role: "Virtual Documents",
            text: "Mi chiamo Massimo Decimo Meridio, comandante dell'esercito del nord, generale delle legioni Felix, servoleale dell'unico vero imperatore Marco Aurelio"
        },
        {
            imgUrl: "https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-143@2x-443x424.png",
            name: "Gustavo Pini",
            role: "Virtual Documents",
            text: "Mi chiamo Massimo Decimo Meridio, comandante dell'esercito del nord, generale delle legioni Felix, servoleale dell'unico vero imperatore Marco Aurelio"
        },
        {
            imgUrl: "https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-150@2x-443x424.png",
            name: "Franco Pini",
            role: "Virtual Documents",
            text: "Mi chiamo Massimo Decimo Meridio, comandante dell'esercito del nord, generale delle legioni Felix, servoleale dell'unico vero imperatore Marco Aurelio"
        },
        {
            imgUrl: "https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-145@2x-443x424.png",
            name: "Tino Pini",
            role: "Virtual Documents",
            text: "Mi chiamo Massimo Decimo Meridio, comandante dell'esercito del nord, generale delle legioni Felix, servoleale dell'unico vero imperatore Marco Aurelio"
        },
        {
            imgUrl: "https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-144@2x-443x424.png",
            name: "Goffredo Pini",
            role: "Virtual Documents",
            text: "Mi chiamo Massimo Decimo Meridio, comandante dell'esercito del nord, generale delle legioni Felix, servoleale dell'unico vero imperatore Marco Aurelio"
        },
        {
            imgUrl: "https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-146@2x-443x424.png",
            name: "Ubaldo Pini",
            role: "Virtual Documents",
            text: "Mi chiamo Massimo Decimo Meridio, comandante dell'esercito del nord, generale delle legioni Felix, servoleale dell'unico vero imperatore Marco Aurelio"
        },
    ],

    cardHomeArray: [
        {
            icon: "fa-solid fa-gauge",
            title: "Speed Optimization",
            text: "Far far away, behind the word mountains, far from the countries Vokalia Separated...",
        },
        {
            icon: "fa-solid fa-cloud",
            title: "Cloud Solutions",
            text: "Far far away, behind the word mountains, far from the countries Vokalia Separated..."
        },
        {
            icon: "fa-solid fa-mobile-screen",
            title: "Web Design",
            text: "Far far away, behind the word mountains, far from the countries Vokalia Separated..."
        },
        {
            icon: "fa-solid fa-stopwatch",
            title: "Online Marketing",
            text: "Far far away, behind the word mountains, far from the countries Vokalia Separated..."
        },
    ],

    listFooter: [
        {
            title: "Careers",
            routeName:"notfound"
        },
        {
            title: "News",
            routeName:"notfound"
        },
        {
            title: "Terms of use",
            routeName:"notfound"
        },
        {
            title: "Privacy Projects",
            routeName:"notfound"
        },
         {
             title: "About",
             routeName:"about"
         },
         {
             title: "Contact",
             routeName:"contacts"

         },


    ],
    cardContact: [
        {
            name: "ADDRESS",
            text: "123 Ave, Lorem City, site Country, The World",
            icon: "fa-solid fa-location-dot",

        },
        {
            name: "PHONE",
            text: "(001) 123456789 - 234567891",
            mail: "info@phloxbusiness.com",
            icon: "fa-solid fa-mobile-screen",

        },
        {
            name: "WORK HOUSE",
            text: "Monday - Friday       09.00 - 23.00",
            gg: "Sunday         09.00 - 16.00",
            icon: "fa-regular fa-clock"

        },
    ],

    cardOtherProject: [
        {
            imgPath: "otherProjectHome1",
            title: "The Basket of Flowers",
            subTitle: "BRANDING MARKETING",
        },
        {
            imgPath: "otherProjectHome2",
            title: "A Famous Ferris Wheel",
            subTitle: "MARKETING",
        },
        {
            imgPath: "otherProjectHome3",
            title: "Complementary Colors",
            subTitle: "BRANDING MARKETING",
        },
        {
            imgPath: "otherProjectHome4",
            title: "Business Prestige",
            subTitle: "BRANDING",
        },
        {
            imgPath: "otherProjectHome5",
            title: "Colorful Origami Boats",
            subTitle: "BRANDING MARKETING",
        },
        {
            imgPath: "otherProjectHome6",
            title: "Modern Couch",
            subTitle: "MARKETING",
        },
        {
            imgPath: "otherProjectHome7",
            title: "Hot Air Baloon",
            subTitle: "BRANDING MARKETING",
        },
        {
            imgPath: "otherProjectHome8",
            title: "Make Difference",
            subTitle: "BRANDING",
        }
    ],

    sponsorArray: [
        {
            path: "../src/assets/img/img-footer/client-avantgarde.png"
        },
        {
            path: "../src/assets/img/img-footer/client-bullseye.png"
        },
        {
            path: "../src/assets/img/img-footer/client-chippys.png"
        },
        {
            path: "../src/assets/img/img-footer/client-fastlane.png"
        },
        {
            path: "../src/assets/img/img-footer/client-7@2x.png"
        },
        {
            path: "../src/assets/img/img-footer/client-minghy.png"
        },

    ],

    cardPrices: [
        {
            title: "DESIGNING",
            subTitle: "All Designs",
            price: "10",
            isActive: false,
            listFeatures: ["Creative Design Enabled", "Vibrant Color Usage","Eye Catching Design","Extreme Typography","Exceptional Design"]
        },
        {
            title: "DEVELOPMENT",
            subTitle: "WordPress Project",
            price: "15",
            isActive: true,
            listFeatures: ["Creative Design Enabled", "Vibrant Color Usage","Eye Catching Design","Extreme Typography","Exceptional Design"]
        },
        {
            title: "SEO",
            subTitle: "Web Products",
            price: "10",
            isActive: false,
            listFeatures: ["Creative Design Enabled", "Vibrant Color Usage","Eye Catching Design","Extreme Typography","Exceptional Design"]
        },
    ]
});