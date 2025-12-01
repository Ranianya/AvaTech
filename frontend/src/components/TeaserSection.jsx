import React from 'react';
import { assets } from '../assets/assets';
import Hero_background from '../assets/Hero_background.png';
// Assurez-vous d'avoir le chemin de votre image de fond (par exemple, './assets/video_background.png')
 // ⚠️ REMPLACEZ PAR LE CHEMIN RÉEL DE VOTRE IMAGE

export default function TeaserSection() {
    
    const backgroundStyle = "bg-[#dfd2b4] p-10 md:p-16";
    const titleStyle = "font-serif text-3xl md:text-5xl font-bold text-center text-[#4a4030] tracking-wide";
    
    // Conteneur externe (limite la largeur de la vidéo et de son fond)
    const aspectRatioWrapperStyle = "relative w-50 max-100 pt-[20%]"; 
    
    // Conteneur interne (où la vidéo irait)
    // Nous allons maintenant créer une image de fond pour CE conteneur.
    const videoForegroundStyle = "absolute top-0 w-90 h-60 bg-black rounded-3xl shadow-2xl border-4 border-[#4a4030] flex items-center justify-center ml-80 mt-20"; // z-10 pour être devant l'image

    return (
        <section className={`w-full ${backgroundStyle}`}>
            
            <h1 className={titleStyle}>
                WATCH THE OFFICIAL TEASER AND PREPARE <br className="hidden md:block"/> 
                TO BEND CODE LIKE A MASTER!
            </h1>

            {/* Conteneur principal de la Vidéo et de son Fond */}
            <div className=''>

            </div>
            <div className="ml-40 justify-center mt-10 mb-20">
                <div className={aspectRatioWrapperStyle}>
                    
                    {/* 1. L'image de fond (positionnée derrière le lecteur vidéo) */}
                    <div 
                        className=" justify-center absolute top-0 left-2 right-5 w-250 h-90 rounded-2xl overflow-hidden " 
                        style={{ 
                            backgroundImage: `url(${assets.video_img})`, // Utilise votre image
                            
                            zIndex: 0 // Assure qu'elle est en arrière-plan
                        }}
                    ></div>

                    {/* 2. Le lecteur vidéo (positionné au-dessus de l'image de fond) */}
                    <div className={videoForegroundStyle}>
                        
                        {/* ⚠️ REMPLACER CECI PAR VOTRE VRAI CODE EMBED VIDÉO (iframe) ⚠️ */}
                        
                        {/* Début du Placeholder (à supprimer quand la vidéo est intégrée) */}
                        <div className="relative z-20 w-20 h-20 rounded-full bg-[#4a4030] flex items-center justify-center cursor-pointer">
                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        {/* Fin du Placeholder */}
                    </div>
                </div>
            </div>
        </section>
    );
}