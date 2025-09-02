import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvaiLableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvaiLableThemes>(() => {
      const storageTheme = localStorage.getItem('theme') as AvaiLableThemes || 'dark';
      return storageTheme;
  });

  const nextThemeIcon ={
    dark:  <SunIcon />,
    light: <MoonIcon />,

  };

  function hanndleThemeChance
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) 
    { 
      event.preventDefault();
      setTheme(prevTheme =>{
        const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
        return nextTheme;

    });
  }
  
  useEffect(() => {
    
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);


  return( 
  
    <nav className={styles.menu}>
        
      <a className={styles.menuLink} 
      href="#" 
      aria-label='Ir para a Home' 
      title='Ir para a Home'


      >
        <HouseIcon />
        
      </a>
      
      <a className={styles.menuLink} href="#"  aria-label='Ver Histórico' title='Ver Histórico'>
        <HistoryIcon />
        
      </a>

      <a className={styles.menuLink} href="#"  aria-label='Configurações' title='Configurações'>
        <SettingsIcon />
        
      </a>

      <a className={styles.menuLink}
       
       href="#"  
       aria-label='Mudar Tema' 
       title='Mudar Tema'
       onClick={hanndleThemeChance}

      >
        {nextThemeIcon[theme]}
        
      </a>  
    
    </nav>
  );
}