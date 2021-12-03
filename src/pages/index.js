import * as React from "react"
import { Link } from "react-router-dom"
import Header from "../component/Header"
import Footer from "../component/Footer"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import "./../assets/sass/home/main.sass"
import preview from "./../assets/images/preview.png"
import mapsAndFlags from "./../assets/images/maps-and-flags.svg"
import profits from "./../assets/images/profits.svg"
import clock from "./../assets/images/clock.svg"
import padlock from "./../assets/images/padlock.svg"
import message from "./../assets/images/message.svg"
import clipboard from "./../assets/images/clipboard.svg"
import euro from "./../assets/images/euro.svg"
import increasedRevenue from "./../assets/images/increased-revenue.svg"
import paiementMobile from "./../assets/images/paiement-mobile.svg"


const IndexPage = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const advantage = [
        {
            icon: mapsAndFlags,
            title: 'Localisations multiples',
            text: 'Vous avez plus d\'un emplacement? Gérez facilement plusieurs emplacements à partir du même tableau de bord simple.'
        },
        {
            icon: profits,
            title: 'Statistiques des visiteurs',
            text: 'Obtenez une meilleure compréhension de votre entreprise en voyant quand et à quelle fréquence vos clients dînent avec vous.'
        },
        {
            icon: clock,
            title: 'Programmation des menus',
            text: 'Affichez automatiquement les différents menus pour le petit-déjeuner, le déjeuner et le dîner.'
        },
        {
            icon: padlock,
            title: 'Sécurisé',
            text: 'Nous appliquons des méthodes de sécurité standard de l\'industrie, afin que vos données soient toujours sauvegardées et protégées.'
        },
        {
            icon: message,
            title: 'Assistance 24h/24 et 7j/7',
            text: 'Contactez-nous et nous vous répondrons très rapidement.'
        },
        {
            icon: clipboard,
            title: 'Suspendre la vaisselle',
            text: 'Si vous êtes à court d\'un plat, suspendez- le simplement en temps réel jusqu\'à ce que vous l\'ayez à nouveau'
        },
        {
            icon: euro,
            title: 'Économisez de l\'argent',
            text: 'Pas de dépenses pour développer votre propre site Web ou menu papier imprimé et design. Économisez sur le développement de l\'application et du site Web'
        },
        {
            icon: increasedRevenue,
            title: 'Augmentation des ventes',
            text: 'Le menu interactif est une mini-application de votre établissement : images, descriptions, recommandations, prix, et une fois que les invités ont vu le menu, ils ont tendance à commander plus.'
        },
        {
            icon: paiementMobile,
            title: 'Commande sans contact',
            text: 'Les clients pourront marquer les plats souhaités et montrer la liste au serveur. Nos recherches ont montré que cette fonctionnalité augmente les commandes'
        },
    ]

    return (
        <main>
            <Header/>
            <div className="main">
                <div className="mask">
                    <div className="content">
                        <h1>Votre menu digital</h1>
                        <p>
                        Protégez vos clients en leur proposant une
                        expérience sans contact sécuritaire et 
                        pragmatique.
                        </p>
                        <Link to="/#yourAnchorTag">
                            <button>Essaie gratuit</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="advantage" id="advantage">
                <h1>Découvrez les avantages d'un
                menu sans contact ?</h1>
                <div className="container">
                <div>
                    <h2>Ecologique</h2>
                    <p>
                    Sans germe, meilleur pour l'environnement,
                    plus rapide et plus sûr que le menu
                    traditionnel.
                    </p>
                </div>
                <div>
                    <h2>Mise à jour simple</h2>
                    <p>
                    Constructeur de menu simple qui change
                    instantanément. Pas de réimpressions !
                    </p>
                </div>
                <div>
                    <h2>Plus rapide</h2>
                    <p>
                    Conçu pour permettre aux clients de trouver
                    plus facilement des articles, ce qui accélère
                    le traitement des tables.
                    </p>
                </div>
                </div>
            </div>
            <div className="dashboard">
                <div className="content">
                    <h1>Un dashboard en quelques Étapes</h1>
                    <p>
                        Ipsam vero urbem Byzantiorum fuisse
                        refertissimam atque ornatissimam signis
                        quis ignorat? Quae illi, exhausti 
                        sumptibus bellisque maximis, cum omnis 
                        Mithridaticos impetus totumque 
                    </p>
                    <h3>marche sur</h3>
                    <div className="work-on">
                        <div className="navigator">
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26 0C11.6635 0 0 11.6635 0 26C0 40.3365 11.6635 52 26 52C40.3365 52 52 40.3365 52 26C52 11.6635 40.3365 0 26 0ZM47.2523 31.7678C46.926 32.9691 46.5005 34.1298 45.9848 35.2406L42.6186 33.2972L40.6288 36.7436L43.9901 38.6842C43.2771 39.6924 42.4817 40.6383 41.6135 41.5121L39.1204 38.541L36.0721 41.0991L38.5665 44.0719C37.5587 44.7748 36.4898 45.3956 35.3693 45.9246L34.04 42.2723L30.3003 43.6334L31.631 47.2896C30.4526 47.6015 29.2359 47.8174 27.9897 47.9297V44.0408H24.0101V47.9295C22.7637 47.8173 21.547 47.6014 20.3687 47.2895L21.6994 43.6333L17.9598 42.2722L16.6304 45.9245C15.5099 45.3955 14.441 44.7747 13.4332 44.0717L15.9277 41.099L12.8793 38.5409L10.3862 41.5119C9.51812 40.6381 8.7226 39.6923 8.00959 38.684L11.3709 36.7434L9.38109 33.2971L6.01489 35.2405C5.49927 34.1296 5.07371 32.9689 4.74739 31.7676L8.57854 31.0922L7.88755 27.173L4.05759 27.8484C4.00692 27.2388 3.97959 26.6225 3.97959 26C3.97959 25.3775 4.00692 24.7612 4.05786 24.1515L7.88782 24.8268L8.57881 20.9077L4.74765 20.2322C5.07398 19.0309 5.49953 17.8702 6.01515 16.7594L9.38136 18.7028L11.3712 15.2564L8.00986 13.3158C8.72287 12.3076 9.51826 11.3617 10.3865 10.4879L12.8795 13.459L15.9279 10.9009L13.4335 7.92814C14.4413 7.22521 15.5102 6.6044 16.6307 6.07538L17.96 9.72771L21.6997 8.36656L20.3689 4.71051C21.5472 4.39864 22.7639 4.18268 24.0102 4.07046V7.95918H27.9898V4.07046C29.2362 4.18268 30.4529 4.39864 31.6311 4.71051L30.3005 8.36669L34.0401 9.72785L35.3694 6.07551C36.4899 6.60453 37.5589 7.22535 38.5666 7.92828L36.0722 10.901L39.1206 13.4591L41.6137 10.4881C42.4817 11.3619 43.2773 12.3077 43.9903 13.316L40.629 15.2566L42.6186 18.7028L45.9848 16.7594C46.5005 17.8702 46.926 19.0309 47.2523 20.2322L43.4212 20.9077L44.1122 24.8268L47.9421 24.1515C47.9931 24.7612 48.0204 25.3775 48.0204 26C48.0204 26.6225 47.9931 27.2388 47.9421 27.8485L44.1122 27.1732L43.4212 31.0923L47.2523 31.7678Z" fill="#24306A" />
                                <path d="M23.2232 23.2231L14.8928 37.1072L28.7769 28.7767L37.1074 14.8926L23.2232 23.2231Z" fill="#24306A" />
                            </svg>
                            <p>Safari iOS</p>
                        </div>
                        <div className="navigator">
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M44.3848 7.61516C39.474 2.70451 32.9448 0 26 0C19.0552 0 12.526 2.70451 7.61516 7.61516C2.70451 12.526 0 19.0552 0 26C0 32.9448 2.70451 39.474 7.61516 44.3848C12.526 49.2955 19.0552 52 26 52C32.9448 52 39.474 49.2955 44.3848 44.3848C49.2955 39.474 52 32.9448 52 26C52 19.0552 49.2955 12.526 44.3848 7.61516ZM26 3.04688C32.131 3.04688 37.895 5.43441 42.2303 9.7697C43.6132 11.1525 44.7968 12.6812 45.769 14.3203H26C20.4167 14.3203 15.7367 18.2586 14.59 23.5029L7.88805 11.8948C8.46696 11.1545 9.09472 10.4447 9.7698 9.7697C14.105 5.43441 19.869 3.04688 26 3.04688ZM34.6328 26C34.6328 30.7601 30.7601 34.6328 26 34.6328C21.2399 34.6328 17.3672 30.7601 17.3672 26C17.3672 21.2399 21.2399 17.3672 26 17.3672C30.7601 17.3672 34.6328 21.2399 34.6328 26ZM3.04688 26C3.04688 21.982 4.07245 18.1216 5.9996 14.7177L15.8121 31.7132C15.8255 31.7364 15.8398 31.7586 15.8542 31.7807C17.8681 35.3017 21.6615 37.6797 26 37.6797C27.2345 37.6797 28.4247 37.4865 29.5425 37.1299L22.841 48.7372C17.908 48.0622 13.3511 45.8117 9.7697 42.2303C5.43441 37.895 3.04688 32.131 3.04688 26ZM42.2303 42.2303C37.9509 46.5097 32.2789 48.8896 26.2362 48.9503L36.0486 31.9548C36.0599 31.9352 36.0688 31.915 36.0792 31.8951C37.0957 30.1636 37.6797 28.1489 37.6797 26C37.6797 22.5834 36.205 19.5049 33.8588 17.3672H47.2797C48.3772 20.073 48.9531 22.9921 48.9531 26C48.9531 32.131 46.5656 37.895 42.2303 42.2303Z" fill="#24306A" />
                            </svg>
                            <p>Chrome Android</p>
                        </div>
                        <div className="navigator">
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.984 0C11.6767 0 0 11.6775 0 25.984C0 40.2914 11.6775 51.9681 25.984 51.9681C40.2914 51.9681 51.9681 40.2906 51.9681 25.984C51.9681 11.6767 40.2906 0 25.984 0ZM18.2333 4.39394C16.4505 6.66054 15.155 9.46286 14.2585 12.18H7.67555C10.3412 8.6533 14.0004 5.91817 18.2333 4.39394ZM5.72989 15.2149H13.397C12.7082 18.1012 12.3016 21.2345 12.204 24.4615H3.09677C3.3154 21.1418 4.24301 18.0028 5.72989 15.2149ZM5.72989 36.7431C4.24301 33.9552 3.3154 30.8263 3.09677 27.5065H12.204C12.3016 30.7335 12.7082 33.8567 13.397 36.7431H5.72989ZM7.67555 39.7881H14.2584C15.1547 42.5045 16.4502 45.3072 18.2333 47.5742C14.0004 46.0499 10.3412 43.3148 7.67555 39.7881ZM24.4615 48.6647C21.0622 47.522 18.7185 43.1579 17.4806 39.7881H24.4615V48.6647ZM24.4615 36.7431H16.5329C15.7929 33.8975 15.3544 30.7663 15.2502 27.5065H24.4615V36.7431ZM24.4615 24.4615H15.2502C15.3545 21.2018 15.793 18.0706 16.5329 15.225H24.4615V24.4615ZM24.4615 12.18H17.4806C18.7184 8.81032 21.0622 4.44611 24.4615 3.30343V12.18ZM46.2382 15.225C47.7252 18.0129 48.6527 21.1418 48.8713 24.4615H39.7641C39.6665 21.2345 39.2599 18.1114 38.5711 15.225H46.2382ZM44.2925 12.18H37.7097C36.8134 9.46357 35.5179 6.66085 33.7348 4.39394C37.9677 5.91817 41.6269 8.6533 44.2925 12.18ZM27.5065 3.30343C30.9059 4.44611 33.2496 8.81022 34.4875 12.18H27.5065V3.30343ZM27.5065 15.225H35.4352C36.1752 18.0706 36.6137 21.2018 36.7179 24.4615H27.5065V15.225ZM27.5065 27.4964H36.7179C36.6136 30.7562 36.1751 33.8975 35.4352 36.7431H27.5065V27.4964ZM27.5065 48.6647V39.7779H34.4875C33.2497 43.1476 30.9059 47.522 27.5065 48.6647ZM33.7348 47.5742C35.5176 45.3075 36.8131 42.495 37.7097 39.7779H44.2925C41.6269 43.3046 37.9677 46.0499 33.7348 47.5742ZM46.2382 36.7431H38.5711C39.2599 33.8567 39.6665 30.7234 39.7641 27.4964H48.8713C48.6527 30.8162 47.7251 33.9552 46.2382 36.7431Z" fill="#24306A" />
                            </svg>
                            <p>autre navigateur</p>
                        </div>
                    </div>
                </div>
                <img src={preview} alt="preview" />
            </div>
            <h1 className="avantages">LES AVANTAGES DU MENU DIGITAL</h1>
            <div className="advantage_menu">
                {
                    advantage.map((e, i) => {
                        return (
                            <div key={i} className="content">
                                <img src={e.icon} alt={e.title}/>
                                <h2>{e.title}</h2>
                                <p>{e.text}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="tarif" id="tarif">
                <h1>Tarif</h1>
                <div className="content">
                    <div className="block">
                        <div className="price">
                            <h3>Essaie Gratuit</h3>
                            <p>DE 14 JOURS</p>
                        </div>
                        <div className="option">
                            <p>Ipsam urbem Byzantiorum</p>
                            <p>Ipsam urbem Byzantiorum</p>
                            <p>Ipsam urbem Byzantiorum</p>
                        </div>
                        <button>Essaie gratuit</button>
                    </div>
                    <div className="block">
                        <div className="price">
                            <h2>4,99€</h2>
                            <p>/mois</p>
                        </div>
                        <div className="option">
                            <p>Ipsam urbem Byzantiorum</p>
                            <p>Ipsam urbem Byzantiorum</p>
                            <p>Ipsam urbem Byzantiorum</p>
                        </div>
                        <button className="btn-full">Commencer</button>
                    </div>
                </div>
            </div>
            <div className="faq" id="faq">
                <h1>FAQ</h1>
                <div className="content">
                    <Accordion className="item" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={< svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4999 14.0553C11.0877 14.0553 10.6756 13.898 10.3613 13.5838L0.471825 3.69426C-0.157275 3.06516 -0.157275 2.04518 0.471825 1.41634C1.10067 0.787491 2.12045 0.787491 2.7496 1.41634L11.4999 10.1672L20.2503 1.41664C20.8794 0.787796 21.8991 0.787796 22.5279 1.41664C23.1573 2.04549 23.1573 3.06546 22.5279 3.69457L12.6386 13.5841C12.3241 13.8983 11.912 14.0553 11.4999 14.0553Z" fill="#24306A" /></svg>}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className="title">
                                Ipsam vero urbem Byzantiorum fuisse refertissimam atque ornatissimam signis quis ignorat ?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                Aliquam eget maximus est, id dignissim quam.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="item" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={< svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4999 14.0553C11.0877 14.0553 10.6756 13.898 10.3613 13.5838L0.471825 3.69426C-0.157275 3.06516 -0.157275 2.04518 0.471825 1.41634C1.10067 0.787491 2.12045 0.787491 2.7496 1.41634L11.4999 10.1672L20.2503 1.41664C20.8794 0.787796 21.8991 0.787796 22.5279 1.41664C23.1573 2.04549 23.1573 3.06546 22.5279 3.69457L12.6386 13.5841C12.3241 13.8983 11.912 14.0553 11.4999 14.0553Z" fill="#24306A" /></svg>}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography className="title">
                                Ipsam vero urbem Byzantiorum fuisse refertissimam atque ornatissimam signis quis ignorat ?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                Aliquam eget maximus est, id dignissim quam.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="item" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={< svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4999 14.0553C11.0877 14.0553 10.6756 13.898 10.3613 13.5838L0.471825 3.69426C-0.157275 3.06516 -0.157275 2.04518 0.471825 1.41634C1.10067 0.787491 2.12045 0.787491 2.7496 1.41634L11.4999 10.1672L20.2503 1.41664C20.8794 0.787796 21.8991 0.787796 22.5279 1.41664C23.1573 2.04549 23.1573 3.06546 22.5279 3.69457L12.6386 13.5841C12.3241 13.8983 11.912 14.0553 11.4999 14.0553Z" fill="#24306A" /></svg>}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography className="title">
                                Ipsam vero urbem Byzantiorum fuisse refertissimam atque ornatissimam signis quis ignorat ?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                Aliquam eget maximus est, id dignissim quam.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div className="try">
                <h1>essaie gratuit de 14 jours</h1>
                <p>Démarré l’essaie gratuit simple et rapide</p>
                <Link to="/#yourAnchorTag">
                    <button>Commencer</button>
                </Link>
            </div>
            <Footer/>
        </main>
    )
}

export default IndexPage
