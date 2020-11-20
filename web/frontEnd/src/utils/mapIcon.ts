import leaflet from 'leaflet';
import mapMarkerIcon from "../assets/images/icons/markerIcon.svg";

const mapIcon = leaflet.icon({
  iconUrl: mapMarkerIcon,
  iconSize: [58, 68],
  iconAnchor: [29, 68], 
  popupAnchor: [0, -60]
})

export default mapIcon;