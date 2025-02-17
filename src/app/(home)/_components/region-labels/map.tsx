"use client";
import jsVectorMap from "jsvectormap";
import { useEffect } from "react";
import "@/js/us-aea-en";

const ARTISTS = [
  "Eminem",
  "The Weeknd",
  "Kendrick Lamar",
  "Taylor Swift",
  "Drake"
];

// Create a mapping of states to artists and full names
const stateData: { [key: string]: { artist: string; fullName: string } } = {
  'US-AL': { artist: 'Eminem', fullName: 'Alabama' },
  'US-AK': { artist: 'Drake', fullName: 'Alaska' },
  'US-AZ': { artist: 'The Weeknd', fullName: 'Arizona' },
  'US-AR': { artist: 'Taylor Swift', fullName: 'Arkansas' },
  'US-CA': { artist: 'Kendrick Lamar', fullName: 'California' },
  'US-CO': { artist: 'Drake', fullName: 'Colorado' },
  'US-CT': { artist: 'Eminem', fullName: 'Connecticut' },
  'US-DE': { artist: 'The Weeknd', fullName: 'Delaware' },
  'US-FL': { artist: 'Drake', fullName: 'Florida' },
  'US-GA': { artist: 'Taylor Swift', fullName: 'Georgia' },
  'US-HI': { artist: 'Kendrick Lamar', fullName: 'Hawaii' },
  'US-ID': { artist: 'The Weeknd', fullName: 'Idaho' },
  'US-IL': { artist: 'Drake', fullName: 'Illinois' },
  'US-IN': { artist: 'Eminem', fullName: 'Indiana' },
  'US-IA': { artist: 'Taylor Swift', fullName: 'Iowa' },
  'US-KS': { artist: 'Kendrick Lamar', fullName: 'Kansas' },
  'US-KY': { artist: 'Drake', fullName: 'Kentucky' },
  'US-LA': { artist: 'The Weeknd', fullName: 'Louisiana' },
  'US-ME': { artist: 'Eminem', fullName: 'Maine' },
  'US-MD': { artist: 'Taylor Swift', fullName: 'Maryland' },
  'US-MA': { artist: 'Kendrick Lamar', fullName: 'Massachusetts' },
  'US-MI': { artist: 'Drake', fullName: 'Michigan' },
  'US-MN': { artist: 'The Weeknd', fullName: 'Minnesota' },
  'US-MS': { artist: 'Taylor Swift', fullName: 'Mississippi' },
  'US-MO': { artist: 'Eminem', fullName: 'Missouri' },
  'US-MT': { artist: 'Drake', fullName: 'Montana' },
  'US-NE': { artist: 'Kendrick Lamar', fullName: 'Nebraska' },
  'US-NV': { artist: 'The Weeknd', fullName: 'Nevada' },
  'US-NH': { artist: 'Taylor Swift', fullName: 'New Hampshire' },
  'US-NJ': { artist: 'Drake', fullName: 'New Jersey' },
  'US-NM': { artist: 'Eminem', fullName: 'New Mexico' },
  'US-NY': { artist: 'The Weeknd', fullName: 'New York' },
  'US-NC': { artist: 'Kendrick Lamar', fullName: 'North Carolina' },
  'US-ND': { artist: 'Drake', fullName: 'North Dakota' },
  'US-OH': { artist: 'Taylor Swift', fullName: 'Ohio' },
  'US-OK': { artist: 'Eminem', fullName: 'Oklahoma' },
  'US-OR': { artist: 'The Weeknd', fullName: 'Oregon' },
  'US-PA': { artist: 'Drake', fullName: 'Pennsylvania' },
  'US-RI': { artist: 'Kendrick Lamar', fullName: 'Rhode Island' },
  'US-SC': { artist: 'Taylor Swift', fullName: 'South Carolina' },
  'US-SD': { artist: 'The Weeknd', fullName: 'South Dakota' },
  'US-TN': { artist: 'Drake', fullName: 'Tennessee' },
  'US-TX': { artist: 'Eminem', fullName: 'Texas' },
  'US-UT': { artist: 'Kendrick Lamar', fullName: 'Utah' },
  'US-VT': { artist: 'The Weeknd', fullName: 'Vermont' },
  'US-VA': { artist: 'Taylor Swift', fullName: 'Virginia' },
  'US-WA': { artist: 'Drake', fullName: 'Washington' },
  'US-WV': { artist: 'Eminem', fullName: 'West Virginia' },
  'US-WI': { artist: 'The Weeknd', fullName: 'Wisconsin' },
  'US-WY': { artist: 'Kendrick Lamar', fullName: 'Wyoming' }
};

export default function Map() {
  useEffect(() => {
    const map = new jsVectorMap({
      selector: "#mapOne",
      map: "us_aea_en",
      zoomButtons: true,
      regionStyle: {
        initial: {
          fill: "#C8D0D8",
        },
        hover: {
          fillOpacity: 1,
          fill: "#3056D3",
        },
      },
      regionLabelStyle: {
        initial: {
          fontFamily: "Inter",
          fontWeight: "500",
          fill: "#fff",
        },
        hover: {
          cursor: "pointer",
        },
      },
      labels: {
        regions: {
          render(code: string) {
            return code.split("-")[1];  // Only show state code
          },
        },
      },
      // Enhanced tooltip configuration
      onRegionTooltipShow(event: any, tooltip: any, code: string) {
        const stateInfo = stateData[code];
        tooltip.text(
          `${stateInfo.fullName}\nTop Artist: ${stateInfo.artist}`
        );
      },
    });

    return () => {
      map.destroy();
    };
  }, []);

  return (
    <div className="h-[422px]">
      <div id="mapOne" className="mapOne map-btn" />
    </div>
  );
}