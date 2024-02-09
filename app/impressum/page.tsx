import HeroAlternativ from '@/components/HeroAlternativ'
import Section from '@/components/Section'

export default function Impressum() {
    return (
      <>
      <HeroAlternativ
        props='IMPRESSUM'/>
      <Section 
        header='Verantwortlich für den Inhalt'
        text={`LÈquipe Design und Tech Agentur
        
        Inhaber: Henri Aerts
        
        Telefon: + 49 15678 409846
        
        E-Mail: info@lequipe.online
        
`}
        padding='pt-40'/>
      <Section 
        header='Haftungshinweis'
        text='Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.'/>
      <Section 
        header='Urheberrecht'
        text='Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.'/>
      <Section 
        header='Streitschlichtung'
        text='Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: [Link zur OS-Plattform]. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Dieses Impressum wurde zuletzt am [Datum] aktualisiert.'
        padding='pb-40'/>
      </>
    )
  }