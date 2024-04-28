
import './App.css';
import Accordion from './Components/Accordion';
import RandomColor from './Components/RandomColor';
import StarRating from './Components/StarRating';
import ImageSlider from './Components/ImageSlider';
import ImageDataLoader from './Components/ImageDataLoader';
import TreeViewSideNav from './Components/TreeViewSideNav';
import QRCodeGenerator from './Components/QRCodeGenerator';
import LightDarkTheme from './Components/LightDarkTheme';
import ScrollBar from './Components/ScrollBar';
import TabsContainer from './Components/Tabs/TabsContainer'

function App() {
  return (
    <div className="App">
      <Accordion />
      <RandomColor />
      <StarRating numberOfStars={10} />
      <ImageSlider url="https://picsum.photos/v2/list" limit="10" page="1" />
      <ImageDataLoader />
      <TreeViewSideNav />
      <QRCodeGenerator />
      <LightDarkTheme />
      <ScrollBar />
      <TabsContainer />
    </div>
  );
}

export default App;
