import React, { useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonSearchbar,
  IonBadge,
  IonTabs, IonTabBar, IonTabButton, IonRouterOutlet,
  useIonRouter
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect, useHistory } from 'react-router';

//Custom CSS
import './Applets.css';

//Ionic Icons
import { speedometerOutline,calculator,pencil, chatbubble, readerOutline, logoIonic,logoFirebase, logoReact,
  playCircle, radio, library, search,
  personOutline,
  homeOutline
} from 'ionicons/icons';


const cardData = [
  {
    title: 'Click Counter',
    icon: speedometerOutline,
    subtitle: 'Applet #1',
    link: '/ion-t-evangelio/Applets/Clickcounter',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }

  },
  {
    title: 'Calculator',
    icon: calculator,
    subtitle: 'Applet #2',
    link: '/ion-t-evangelio/Applets/Calculator',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    title: 'To Do List',
    icon: pencil,
    subtitle: 'Applet #3',
    link: '/ion-t-evangelio/Applets/Todolist',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    title: 'Quote Generator',
    icon: chatbubble,
    subtitle: 'Applet #4',
    link: '/ion-t-evangelio/Applets/Quotegenerator',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    title: 'Notes',
    icon: readerOutline,
    subtitle: 'Applet #5',
    link: '/ion-t-evangelio/Applets/Notes',
    tags: {
      tag1: logoIonic,
      tag2: logoReact, 
      tag3: logoFirebase 
    }
  }
  
];

const Applets: React.FC = () => {
  {/*Dynamic Search*/}
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigation = useIonRouter();
  
  const doLogin = () => {
    navigation.push('/ion-t-evangelio/Login','forward','replace');
  }

  
    return (
      <IonPage>
        <IonHeader>
        <IonToolbar>
      <IonButtons slot="end">
      <IonButton onClick={() => doLogin()} expand="block">Login</IonButton>
      </IonButtons>
      <IonTitle>Applets</IonTitle>
    </IonToolbar>

        </IonHeader>
     
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Applets</IonTitle>
            </IonToolbar>
          </IonHeader>
          
         


          {/*Dynamic Search*/}
          <IonSearchbar 
            value={searchTerm} 
            onIonInput={(e) => setSearchTerm(e.target.value ?? '')} 
          />
          
          {cardData
            .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((card, index) => (
              <IonCard key={index} routerLink={card.link} routerDirection='forward'>
                <IonCardHeader>
                  <IonCardTitle>
                    <IonGrid>
                      <IonRow>
                        <IonCol size="2">
                          <IonIcon className="home-card-icon" icon={card.icon} color="primary" />
                        </IonCol>
                        <IonCol size="auto">
                            <div className="home-card-title">{card.title}</div>
                            <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
                            {card.tags && Object.entries(card.tags).map(([key, icon], i) => (
                              <IonIcon
                                key={i}
                                className="home-card-subicon"
                                icon={icon}
                                color="primary" // Set color as needed
                              />
                            ))}
                          </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
          ))}
        </IonContent>
      </IonPage>
    );
};
  
export default Applets;
  