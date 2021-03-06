import axios from "axios";

var catalog = [
  {
    _id: "dartbarrel01",
    title: "Viking Raven",
    img: "barrel01.jpg",
    descrition:
      "Viking Raven Steel 90% tungsten barrel. Available in 23g, 24g, 26g",
    price: 114.0,
    category: "barrel",
  },
  {
    _id: "dartbarrel02",
    title: "Bull's Spike",
    img: "barrel02.jpg",
    descrition:
      "Bull's Spike steel 90% tungsten barrel. Available in 22g, 24g, 26g",
    price: 59.99,
    category: "barrel",
  },
  {
    _id: "dartbarrel03",
    title: "Super Grip",
    img: "barrel03.jpg",
    descrition:
      "Super Grip steel 85% tungsten barrel. Availble in 20g, 22g, 24g or 26g.",
    price: 21.0,
    category: "barrel",
  },
  {
    _id: "dartshaft01",
    title: "Viper Spinster",
    img: "shaft01.jpg",
    descrition: "Viper Spinster Aluminum Dart Shaft",
    price: 7.99,
    category: "shaft",
  },
  {
    _id: "dartshaft02",
    title: "Viperlock Medium",
    img: "shaft02.jpg",
    descrition: "Viperlock Shade Shaft inBetween Red",
    price: 1.49,
    category: "shaft",
  },
  {
    _id: "dartshaft03",
    title: "Pixel Titanium Shaft",
    img: "shaft03.jpg",
    descrition: "Pixel grip shafts with titanium nitrade coating",
    price: 39.99,
    category: "shaft",
  },
  {
    _id: "dartflights01",
    title: "Mission Flare Flight",
    img: "flight01.jpg",
    descrition: "Mission Flare 100 Micron No2 Standard",
    price: 1.72,
    category: "flights",
  },
  {
    _id: "dartflights02",
    title: "Mission Temple Flight",
    img: "flight02.jpg",
    descrition: "Mission Temple 100 Micron Standard",
    price: 2.0,
    category: "flights",
  },
  {
    _id: "dartflights03",
    title: "Shot Mandala Flight",
    img: "flight03.jpg",
    descrition: "Shot Mandala 100 Micron Shape",
    price: 3.25,
    category: "flights",
  },
  {
    _id: "dartboard01",
    title: "Eclipse Pro 2",
    img: "board01.jpg",
    descrition:
      "Eclipse Pro 2 Competition Quality Dart Board Slimmer Bulls Eye PDC",
    price: 139.95,
    category: "dart board",
  },
  {
    _id: "dartboard02",
    title: "Winmau Blade V",
    img: "board02.jpg",
    descrition: "Winmau Blade V Dual Core",
    price: 69.95,
    category: "dart board",
  },
  {
    _id: "dartboard03",
    title: "Shot Bandit",
    img: "board03.jpg",
    descrition: "Shot Bandit Duro Dartboard",
    price: 134.32,
    category: "dart board",
  },
];

class DataService {
  async getCatalog() {
    //let response = await axios.get("http://127.0.0.1:5000/api/catalog");
    //console.log("test", response.data);
    //return response.data;
    return catalog;
  }

  async getWeather(lat, lon) {
    let apiKey = "a99477e956782419c9ca69399314266f";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    let response = await axios.get(url);
    return response.data;
  }

  registerProduct() {}
}

export default DataService;
