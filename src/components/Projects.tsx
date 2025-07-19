import { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';

// Combined projects array (same as before)
const projects = [
  
  {
    id: 'project7',
    title: 'Gujranwala Dual Carriageway Earth Filling (RD 474+00 to 486+00)',
    category: 'Civil Works',
    description: 'Filling of Earth (FOE) at RD 474+00 to 486+00 for the construction of a 15.2 km dual carriageway from GT Road (Benazir Chowk) to LSM (Whandu Interchange), District Gujranwala.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    year: '2023'
  },
  {
    id: 'project8',
    title: 'Gujranwala Dual Carriageway Earth Filling (RD 465+00 to 473+00)',
    category: 'Civil Works',
    description: 'Filling of Earth (FOE) at RD 465+00 to 473+00 for the construction of a 15.2 km dual carriageway from GT Road (Benazir Chowk) to LSM (Whandu Interchange), District Gujranwala.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    year: '2023'
  },
  {
    id: 'project9',
    title: 'Gujranwala Dual Carriageway Box Culvert at RD 484+00',
    category: 'Civil Works',
    description: 'Construction of a box culvert at RD 484+00 for the 15.2 km dual carriageway from GT Road (Benazir Chowk) to LSM (Whandu Interchange), District Gujranwala.',
    image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2023'
  },
  {
    id: 'project10',
    title: 'Gujranwala Dual Carriageway Sub Base and Base Course (RD 458+00 to 496+00)',
    category: 'Civil Works',
    description: 'Providing and laying of sub-base course of crushed stone aggregate and base course of crushed stone aggregate (WBM) at RD 458+00 to 496+00 for the 15.2 km dual carriageway from GT Road (Benazir Chowk) to LSM (Whandu Interchange), District Gujranwala.',
    image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2024'
  },
  {
    id: 'project11',
    title: 'Gujranwala Toll Plaza Electrical Work',
    category: 'Electrical Works',
    description: 'Providing and fixing internal and external electrical work at the toll plaza building for the 15.2 km dual carriageway from GT Road (Benazir Chowk) to LSM (Whandu Interchange), District Gujranwala.',
    image: 'https://images.unsplash.com/photo-1510877619479-2569d3c6e18f?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2024'
  },
  {
    id: 'project12',
    title: 'DHA Prism Phase-IX Electrification (Sector-B, Package-E2)',
    category: 'Electrical Works',
    description: 'Construction of underground external electrification works and street lighting system for Sector-B (Package-E2), Prism Phase-IX, DHA Lahore.',
    image: 'https://images.unsplash.com/photo-1510877619479-2569d3c6e18f?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2021'
  },
  {
    id: 'project13',
    title: 'DHA Prism Phase-IX Electrification (Sector-M, Package-E4)',
    category: 'Electrical Works',
    description: 'Construction of underground external electrification works and street lighting system for Sector-M (Package-E4), Prism Phase-IX, DHA Lahore.',
    image: 'https://images.unsplash.com/photo-1510877619479-2569d3c6e18f?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2021'
  },
  {
    id: 'project14',
    title: 'DHA Prism Phase-IX Service Road and Sewerage (Road # Kb-1)',
    category: 'Civil Works',
    description: 'Execution of the remaining portion of the service road along with sewerage of Road # Kb-1 (120ft wide) in Prism Phase-IX, DHA Lahore.',
    image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2022'
  },
  {
    id: 'project15',
    title: 'DHA Phase-VII RCC Drain (Road No. UX-85)',
    category: 'Civil Works',
    description: 'Construction of an RCC drain along Road No. UX-85 Eastern End (BRB Side) in DHA Phase-VII (Additional Area), Lahore.',
    image: 'https://images.unsplash.com/photo-1558690194-5aaa922b59b6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2013'
  },
  {
    id: 'project16',
    title: 'Bhogit Road Widening and Improvement',
    category: 'Civil Works',
    description: 'Widening and improvement of Bhogit Road from G.T. Road to Bund Road, Lahore.',
    image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2011'
  },
  {
    id: 'project17',
    title: 'DHA Phase-VII Electrification and Street Lighting (Y-III Block)',
    category: 'Electrical Works',
    description: 'Construction of underground external electrification and street lighting system in Y-III Block, DHA Phase-VII (Additional Area), Lahore.',
    image: 'https://images.unsplash.com/photo-1510877619479-2569d3c6e18f?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2014'
  },
  {
    id: 'project18',
    title: 'Islamabad Housing Project (Block 124)',
    category: 'Civil Works',
    description: 'Construction of 480 Category IV flats (Block 124) for Federal Government Employees at G-11/4, Islamabad, under the PM Programme.',
    image: 'https://plus.unsplash.com/premium_photo-1680157072379-6307fa7c0d79?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2004'
  },
  {
    id: 'project19',
    title: 'Islamabad Housing Project (Block 125)',
    category: 'Civil Works',
    description: 'Construction of 480 Category IV flats (Block 125) for Federal Government Employees at G-11/4, Islamabad, under the PM Programme.',
    image: 'https://plus.unsplash.com/premium_photo-1680157072379-6307fa7c0d79?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2004'
  },
  {
    id: 'project20',
    title: 'Lahore Road Construction',
    category: 'Civil Works',
    description: 'Construction of a road in Lahore (specific details incomplete in the document).',
    image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2004'
  },
  {
    id: 'project21',
    title: 'Chund Lalian Road Construction (NA-88)',
    category: 'Civil Works',
    description: 'Construction of the remaining portion of Chund Lalian Road in NA-88, District Jhang.',
    image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2005'
  },
  {
    id: 'project22',
    title: 'Okara Albar Road Widening and Improvement (NA-144)',
    category: 'Civil Works',
    description: 'Widening and improvement of Okara Albar Road (Phase-II) in NA-144, District Okara.',
    image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2006'
  },
  {
    id: 'project23',
    title: 'Sangra Sadat to Chenab Nagar Road Repair (NA-88)',
    category: 'Civil Works',
    description: 'Repairing of the road from Sangra Sadat to Chenab Nagar in NA-88, District Jhang.',
    image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2005'
  },
  {
    id: 'project24',
    title: 'Jhang Lalian Road to Thu Lalka Road Construction (NA-88)',
    category: 'Civil Works',
    description: 'Construction of a metalled link road from Jhang Lalian Road Adda Shado Wala to Thu Lalka in NA-88, District Jhang.',
    image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2005'
  },
  {
    id: 'project25',
    title: 'Jhang Sargodha Road to Lalian Wala Road Construction (NA-88)',
    category: 'Civil Works',
    description: 'Construction of a metalled road from Jhang Sargodha Road Adda Akrian Wala to Lalian Wala in NA-88, District Jhang.',
    image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2005'
  },
  {
    id: 'project26',
    title: 'Aroti Abdul Hakeem Road to Chak Mehram Wala Road Construction (NA-94)',
    category: 'Civil Works',
    description: 'Construction of a metalled road from Aroti Abdul Hakeem Road to Ghosia Shakoria Bus Stop to Chak Mehram Wala (Deka Chah Shahi) in NA-94, Tehsil Kamalia, District Toba Tek Singh.',
    image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2005'
  },
  {
    id: 'project27',
    title: 'Nasirabad to Chontra Sargana Road Construction (NA-94)',
    category: 'Civil Works',
    description: 'Construction of a metalled road from Nasirabad to Chontra Sargana via Lala Mehk Chind in NA-94, Tehsil Kamalia, District Toba Tek Singh.',
    image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2005'
  },

  {
    id: 'project28',
    title: 'Sub-Base Course',
    category: 'Civil Works',
    description: 'Sub-base course for Electric Bus Depot under eco-friendly bus project. ',
    image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2070&auto=format&fit=crop',
    year: '2025'
  },
  {
    id: 'project29',
    title: 'Earthwork and Allied Activities',
    category: 'Civil Works',
    description: 'Earthwork and related civil tasks for the depot. ',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format',
    year: '2025'
  },
  {
    id: 'project30',
    title: 'Ancillary Works',
    category: 'Civil Works',
    description: 'Ancillary infrastructure works for Electric Bus Depot. ',
    image: 'https://images.unsplash.com/photo-1558690194-5aaa922b59b6?q=80&w=2071&auto=format',
    year: '2025'
  },
  {
    id: 'project31',
    title: 'Surface Courses & Rigid Pavement',
    category: 'Civil Works',
    description: 'Surface courses and rigid pavement for depot site. ',
    image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project32',
    title: 'Drainage Works',
    category: 'Civil Works',
    description: 'Drainage systems setup for depot. ',
    image: 'https://images.unsplash.com/photo-1614850523438-5eaa97a22e87?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project33',
    title: 'Sewerage Works',
    category: 'Civil Works',
    description: 'Sewerage lines and structures for the depot.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format',
    year: '2025'
  },
  {
    id: 'project34',
    title: 'Water Tanks',
    category: 'Civil Works',
    description: 'Water tanks for depot water management. ',
    image: 'https://images.unsplash.com/photo-1591980734350-1129ee94e273?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project35',
    title: 'Water Supply & Distribution Network (Underground)',
    category: 'Civil Works',
    description: 'Underground water supply network. ',
    image: 'https://images.unsplash.com/photo-1558690194-5aaa922b59b6?q=80&w=2071&auto=format',
    year: '2025'
  },
  {
    id: 'project36',
    title: 'Tube Well',
    category: 'Civil Works',
    description: 'Tube well construction for water source. ',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project37',
    title: 'Main Depot Office Building',
    category: 'Civil Works',
    description: 'Office building construction for Electric Bus Depot. ',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project38',
    title: 'Operator Building',
    category: 'Civil Works',
    description: 'Operator building for depot operations. ',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project39',
    title: 'Watch Towers',
    category: 'Civil Works',
    description: 'Security watch towers for Electric Bus Depot. ',
    image: 'https://images.unsplash.com/photo-1591980734350-1129ee94e273?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project40',
    title: 'Parking Sheds Civil Works',
    category: 'Civil Works',
    description: 'Construction of parking sheds. ',
    image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project41',
    title: 'Toilet Block',
    category: 'Civil Works',
    description: 'Toilet block building works.',
    image: 'https://images.unsplash.com/photo-1510877619479-2569d3c6e18f?q=80&w=2123&auto=format',
    year: '2025'
  },
  {
    id: 'project42',
    title: 'Guard Rooms',
    category: 'Civil Works',
    description: 'Guard accommodation structures.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format',
    year: '2025'
  },
  {
    id: 'project43',
    title: 'Electric Room & Meter Panel Room',
    category: 'Civil Works',
    description: 'Electric and meter panel room construction.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project44',
    title: 'Pump Room',
    category: 'Civil Works',
    description: 'Pump room facility at the depot.',
    image: 'https://images.unsplash.com/photo-1558690194-5aaa922b59b6?q=80&w=2071&auto=format',
    year: '2025'
  },
  {
    id: 'project45',
    title: 'Road Lighting Network (LED Fixtures)',
    category: 'Electrical Works',
    description: 'LED road lighting system in depot area. ',
    image: 'https://images.unsplash.com/photo-1510877619479-2569d3c6e18f?q=80&w=2123&auto=format',
    year: '2025'
  },
  {
    id: 'project46',
    title: 'Electrification Works (Depot Area)',
    category: 'Electrical Works',
    description: 'Complete external electrification of depot area. ',
    image: 'https://images.unsplash.com/photo-1510877619479-2569d3c6e18f?q=80&w=2123&auto=format',
    year: '2025'
  },
  {
    id: 'project47',
    title: 'CCTV, LAN & WLAN System',
    category: 'Electrical Works',
    description: 'Surveillance and networking systems including CCTV, LAN and WLAN. ',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project48',
    title: 'Fire Fighting Works',
    category: 'Fire Fighting Works',
    description: 'Fire fighting system at depot. ',
    image: 'https://images.unsplash.com/photo-1591980734350-1129ee94e273?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project49',
    title: 'Elevator',
    category: 'Electrical Works',
    description: 'Elevator system installation for Electric Bus Depot. ',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format',
    year: '2025'
  },
  {
    id: 'project50',
    title: 'HVAC System',
    category: 'Electrical Works',
    description: 'Heating, ventilation and air conditioning setup. ',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project51',
    title: 'Vehicle Washing Unit',
    category: 'Electrical Works',
    description: 'Automated washing system for electric buses. ',
    image: 'https://images.unsplash.com/photo-1558690194-5aaa922b59b6?q=80&w=2071&auto=format',
    year: '2025'
  },
  {
    id: 'project52',
    title: 'Solar Panel System',
    category: 'Electrical Works',
    description: 'Solar panels setup complete in all respects. ',
    image: 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project53',
    title: 'VRF Air Conditioning System – Office Building',
    category: 'HVAC Works',
    description: 'Supply and installation of decorative cooling/heating DC inverter type VRF air conditioners with ceiling cassette and concealed ducted indoor units. Includes CIU-1 (12 MBH), CIU-2 (18 MBH), CIU-3 (24 MBH), DIU-2 (24 MBH), TFU-1 (48 MBH), CU-5-1 (480 MBH).',
    image: 'https://images.unsplash.com/photo-1591980734350-1129ee94e273?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project54',
    title: 'VRF Air Conditioning System – Operator Building',
    category: 'HVAC Works',
    description: 'Includes CIU-1 (12 MBH), CIU-2 (18 MBH), CIU-3 (24 MBH), CU-4-1 (432 MBH) for Operator Building HVAC system.',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project55',
    title: 'VRF Air Conditioning – Control Room',
    category: 'HVAC Works',
    description: 'CIU-2 (18 MBH), CIU-3 (24 MBH), TFU-2 (72 MBH), CU-2-1 (228 MBH).',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project56',
    title: 'VRF Air Conditioning – Guard Rooms and Auxiliary Areas',
    category: 'HVAC Works',
    description: 'CIU-1, CIU-2, CIU-3, DIU-3, TFU-3 and CU-4-2 systems; includes VRF control units up to 480 MBH capacity.',
    image: 'https://images.unsplash.com/photo-1510877619479-2569d3c6e18f?q=80&w=2123&auto=format',
    year: '2025'
  },
  {
    id: 'project57',
    title: 'Central Controller and Spare Parts for VRF System',
    category: 'HVAC Works',
    description: 'Central VRF intelligent controller with multifunction control cable, grouped by floors; includes essential spare parts.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format',
    year: '2025'
  },
  {
    id: 'project58',
    title: 'CRAC Unit for Server Room',
    category: 'HVAC Works',
    description: 'Heavy-duty in-row CRAC unit with DX coil, condenser (CRCU), filters, electric reheat coil, humidifier and control panel.',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project59',
    title: 'Refrigerant Copper Piping and Insulation',
    category: 'HVAC Works',
    description: 'Supply and installation of copper pipes, insulation and fittings per HVAC specification.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project60',
    title: 'Ventilation System Installation',
    category: 'HVAC Works',
    description: 'Includes EF-1 to EF-5 propeller fans and SF-1 staircase pressurization system (2-hour fire rated).',
    image: 'https://images.unsplash.com/photo-1558690194-5aaa922b59b6?q=80&w=2071&auto=format',
    year: '2025'
  },
  {
    id: 'project61',
    title: 'Sheet Metal Ducting',
    category: 'HVAC Works',
    description: 'Installation of US gauge 26 and 24 sheet metal ducts with accessories and fittings.',
    image: 'https://images.unsplash.com/photo-1614850523438-5eaa97a22e87?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project62',
    title: 'Flexible Duct Connectors and Duct Crossing Solutions',
    category: 'HVAC Works',
    description: 'Flexible rectangular duct connectors and expansion joints crossing building joints.',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project63',
    title: 'Volume and Fire Dampers',
    category: 'Fire Fighting Works',
    description: 'Volume control dampers and fire dampers for complete HVAC system.',
    image: 'https://images.unsplash.com/photo-1591980734350-1129ee94e273?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project64',
    title: 'Air Devices and Grilles Installation',
    category: 'HVAC Works',
    description: 'Four-way supply and return diffusers, exhaust grilles, bird screens and anti-vermin louvers.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project65',
    title: 'Electrical Controls and Panels (ACP)',
    category: 'HVAC Works',
    description: 'Supply and installation of ACP-1 to ACP-6 panels with HVAC-specific electrical and control works.',
    image: 'https://images.unsplash.com/photo-1510877619479-2569d3c6e18f?q=80&w=2123&auto=format',
    year: '2025'
  },
  {
    id: 'project66',
    title: 'Support Arrangements and Identification',
    category: 'HVAC Works',
    description: 'Installation of supports, hanging systems, duct and pipe painting, labeling, and equipment identification.',
    image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project67',
    title: 'Foundation and Civil Works for HVAC Systems',
    category: 'HVAC Works',
    description: 'Civil works including equipment foundations, patching, boxing, plastering and sealing.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format',
    year: '2025'
  },
  {
    id: 'project68',
    title: 'Testing, Commissioning and Balancing of HVAC System',
    category: 'HVAC Works',
    description: 'Startup, balancing, testing and commissioning of the entire HVAC system.',
    image: 'https://images.unsplash.com/photo-1614850523438-5eaa97a22e87?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project69',
    title: 'Operations & Maintenance During DLP',
    category: 'HVAC Works',
    description: '12-month HVAC system operations and maintenance during Defects Liability Period.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070&auto=format',
    year: '2025'
  },
  {
    id: 'project70',
    title: 'Decorative Wall-Mounted Split ACs',
    category: 'HVAC Works',
    description: 'Supply and installation of WIU-1/OU-1 split AC units (18,000 BTU/hr) for Operator and Rest Area buildings.',
    image: 'https://images.unsplash.com/photo-1510877619479-2569d3c6e18f?q=80&w=2123&auto=format',
    year: '2025'
  }

];

const categories = ['All', 'Civil Works', 'Electrical Works', 'HVAC Works', 'IT & Software Engineering', 'Fire Fighting Works'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  // GSAP Infinite Scroll Animation
  useEffect(() => {
    if (!scrollerRef.current || !isVisible) return;

    // Calculate the total width of the original set of projects
    const cardWidth = 300; // Width of each card (w-[300px])
    const gap = 24; // Tailwind's space-x-6 (6 * 4px = 24px)
    const totalCards = filteredProjects.length;
    const totalWidth = totalCards * (cardWidth + gap) - gap; // Total width of one set of cards

    // Set initial position
    gsap.set(scrollerRef.current, { x: 0 });

    // Create the infinite scroll animation
    animationRef.current = gsap.to(scrollerRef.current, {
      x: -totalWidth, // Move to the left by the total width of one set
      duration: totalCards * 4, // Adjust duration based on number of cards (1s per card)
      ease: 'none', // Linear animation for constant speed
      repeat: -1, // Infinite repeat
      modifiers: {
        x: gsap.utils.unitize((x) => {
          // Modulo to loop back to the start
          return parseFloat(x) % totalWidth;
        })
      }
    });

    return () => {
      // Clean up the animation on unmount or when filteredProjects changes
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [filteredProjects, isVisible]);

  // Handle hover to pause/resume animation
  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.resume();
    }
  };

  // Duplicate the projects to create a seamless loop
  const duplicatedProjects = [...filteredProjects, ...filteredProjects];

  const visibleCategories = categories.filter(category => {
    if (category === 'All') return true; // Always show "All" category
    return projects.some(project => project.category === category);
  });

  return (
    <section id="projects" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-tag">Our Portfolio</span>
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-subtitle">
            Explore our portfolio of successful projects across the UAE and Pakistan
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-10 gap-2">
  {visibleCategories.map((category) => (
    <button
      key={category}
      onClick={() => setActiveCategory(category)}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
        activeCategory === category
          ? "bg-teal-500 text-white"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      )}
    >
      {category}
    </button>
  ))}
</div>

        {/* Infinite scrolling container */}
        <div className="overflow-hidden">
          <div
            ref={scrollerRef}
            className="flex space-x-6"
            style={{ minWidth: 'max-content' }}
          >
            {duplicatedProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`} // Unique key for duplicated items
                className={cn(
                  "glass-card hover-card overflow-hidden flex-shrink-0 w-[300px] transition-transform duration-300",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500">{project.year}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
