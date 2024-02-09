import HeroAlternativ from '@/components/HeroAlternativ'
import Section from '@/components/Section'


export default function Datenschutz() {
  return (
    <>
      <HeroAlternativ
        props='DATENSCHUTZ'/>
      <Section 
        header='Welche Daten wir sammeln'
        text='Wir können personenbezogene Daten sammeln, wenn du unsere Website besuchst, dich für unseren Newsletter anmeldest oder uns anderweitig kontaktierst. Die gesammelten Informationen können deinen Namen, deine E-Mail-Adresse, Unternehmensinformationen und andere relevante Details umfassen.'
        padding='pt-40'/>
      <Section 
        header='Wie wir deine Daten nutzen'
        text='Wir nutzen deine Daten, um dir relevante Informationen über unsere Dienstleistungen zuzusenden, deine Anfragen zu beantworten und unsere Website zu verbessern. Deine Daten werden nicht ohne deine Zustimmung zu Marketingzwecken an Dritte weitergegeben.'/>
      <Section 
        header='Wie wir deine Daten nutzen'
        text='Unsere Website verwendet Cookies, um deine Erfahrung zu verbessern. Diese Cookies speichern keine sensiblen Informationen und dienen ausschließlich dazu, die Leistung und Funktionalität unserer Website zu optimieren.'/>
      <Section 
        header='Cookies und ähnliche Technologien'
        text='Unsere Website verwendet Cookies, um deine Erfahrung zu verbessern. Diese Cookies speichern keine sensiblen Informationen und dienen ausschließlich dazu, die Leistung und Funktionalität unserer Website zu optimieren.'/>
      <Section 
        header='Datensicherheit'
        text='Wir setzen angemessene Sicherheitsmaßnahmen ein, um deine Daten vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen. Dennoch können wir keine absolute Sicherheit garantieren. Bei Bedenken bezüglich der Datensicherheit stehen wir dir gerne zur Verfügung.'/>
      <Section 
        header='Links zu anderen Websites'
        text='Unsere Website kann Links zu anderen Websites enthalten, für deren Datenschutzpraktiken wir nicht verantwortlich sind. Wir empfehlen, die Datenschutzerklärungen dieser Websites zu überprüfen.'/>
      <Section 
        header='Deine Rechte'
        text='Du hast das Recht auf Zugriff, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner personenbezogenen Daten. Wenn du Fragen zu unseren Datenschutzpraktiken oder deinen Rechten hast, kontaktiere uns bitte.'/>
      <Section 
        header='Aktualisierungen der Datenschutzerklärung'
        text='Wir können diese Datenschutzerklärung aktualisieren, um Änderungen in unseren Datenschutzpraktiken widerzuspiegeln. Überprüfe diese Seite regelmäßig, um über Aktualisierungen informiert zu bleiben.'/>
      <Section 
        header='Kontakt'
        text='Für Fragen oder Anliegen bezüglich des Datenschutzes kontaktiere uns bitte unter info@lequipe.online. Diese Datenschutzerklärung wurde zuletzt am 16.01.2024 aktualisiert.'
        padding='pb-40'/>
    </>
  )
}