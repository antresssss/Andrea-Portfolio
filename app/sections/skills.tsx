import Image from "next/image";
export default function Skills() {
    const skillCategories = [
      {
        name: 'WEB DEVELOPMENT',
        skills: [
          { 
            name: 'HTML', 
            level: 'advanced',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
          },
          { 
            name: 'CSS', 
            level: 'advanced',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
          },
          { 
            name: 'JAVASCRIPT', 
            level: 'advanced',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
          },
          { 
            name: 'REACT', 
            level: 'advanced',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
          },
          { 
            name: 'VUE', 
            level: 'intermediate',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
          },
          { 
            name: 'TAILWIND', 
            level: 'advanced',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
          },
          { 
            name: 'NODE', 
            level: 'advanced',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
          },
          { 
            name: 'EXPRESS', 
            level: 'advanced',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
          },
          { 
            name: 'TYPESCRIPT', 
            level: 'advanced',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
          },
          { 
            name: 'NEXT', 
            level: 'intermediate',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
          },
          { 
            name: 'LARAVEL', 
            level: 'intermediate',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg'
          },
        ]
      },
      {
        name: 'DESIGN',
        skills: [
          { 
            name: 'FIGMA', 
            level: 'advanced',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
          },
          { 
            name: 'CANVA', 
            level: 'intermediate',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'
          },
          { 
            name: 'PHOTOSHOP', 
            level: 'intermediate',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg'
          },
          { 
            name: 'PAINT', 
            level: 'basic',
            icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968950.png'
          },
          { 
            name: 'SPLINE', 
            level: 'basic',
            icon: 'https://app.spline.design/_assets/_icons/icon_favicon32x32.png'
          },
          { 
            name: 'GIMP', 
            level: 'basic',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg'
          },
          { 
            name: 'FRAMER', 
            level: 'intermediate',
            icon: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg'
          },
        ]
      },
      {
        name: 'CYBERSECURITY',
        skills: [
          { 
            name: 'KALI', 
            level: 'intermediate',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg'
          },
          { 
            name: 'WIRESHARK', 
            level: 'intermediate',
            icon: 'https://www.wireshark.org/assets/icons/wireshark-fin.png'
          },
          { 
            name: 'SECURITY PEN and AUTOSPY', 
            level: 'intermediate',
            icon: 'https://cdn-icons-png.flaticon.com/512/2092/2092663.png'
          },
          { 
            name: 'IDAPRO', 
            level: 'basic',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mme_de_Maintenon.jpg'
          },
        ]
      },
      {
        name: 'VERSION CONTROL',
        skills: [
          { 
            name: 'GIT', 
            level: 'advanced',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
          },
          { 
            name: 'GITHUB', 
            level: 'advanced',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
          },
          { 
            name: 'GITLAB', 
            level: 'intermediate',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg'
          },
          { 
            name: 'NETLIFY', 
            level: 'advanced',
            icon: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg'
          },
        ]
      },
    ];
  
    return (
      <section className="bg-black text-white p-8 rounded-tr-[50px] rounded-tl-[50px] -mt-16">
        <h2 className="text-5xl font-bold mb-8 flex items-center">
          SKILLS
          <span className="ml-2 text-xl">
            <span className="inline-block w-2 h-2 bg-white mx-0.5"></span>
            <span className="inline-block w-2 h-2 bg-white mx-0.5"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.name} 
              className="border border-gray-700 rounded-lg p-4 bg-black"
            >
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                {category.name}
                <span className="ml-2">
                  <span className="inline-block w-1.5 h-1.5 bg-white mx-0.5"></span>
                  <span className="inline-block w-1.5 h-1.5 bg-white mx-0.5"></span>
                </span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center bg-transparent border border-gray-700 rounded-full px-3 py-1 text-sm"
                  >
                    {skill.icon ? (
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} logo`} 
                        className="w-4 h-4 mr-2 object-contain" 
                      />
                    ) : (
                      <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    )}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }