import React, { useState, useEffect } from 'react';


 
function App() {
 
 const [UNIQUEPERSONKEY, setUNIQUEPERSONKEY] = useState('');
 
 const [memberData, setMemberData] = useState(null);
 
 const [pharmacyData, setPharmacyData] = useState(null);
 
 const [showConfirmation, setShowConfirmation] = useState(false);
 
 useEffect(() => {
 
  if (UNIQUEPERSONKEY) {
 
   fetchMemberData();
 
  } else {
 
   setMemberData(null);
 
   setPharmacyData(null);
 
  }
 
 }, [UNIQUEPERSONKEY]);
 
 const handleUNIQUEPERSONKEYChange = (e) => {
 
  setUNIQUEPERSONKEY(e.target.value);
 
 };
 
 const fetchMemberData = () => {
 
  const apiUrl = `https://localhost:7184/api/web/${UNIQUEPERSONKEY}`;
 
  fetch(apiUrl)
 
   .then((response) => {
 
    if (response.ok) {
 
     return response.json();
 
    } else {
 
     throw new Error('Member not found');
 
    }
 
   })
 
   .then((data) => {
 
    console.log(data); // Log the data to the console for debugging
 
    setMemberData(data);
 
    setPharmacyData(data.pharmacy); // Assuming your API returns pharmacy data within the member object
 
   })
 
   .catch((error) => {
 
    console.error('Error fetching member data:', error);
 
    setMemberData(null);
 
    setPharmacyData(null);
 
   });
 
 };
 
 const handleDeleteClick = () => {
 
  setShowConfirmation(true);
 
 };
 
 const confirmDelete = () => {
 
  const deleteApiUrl = `https://localhost:7184/api/web/${UNIQUEPERSONKEY}`;
 
  fetch(deleteApiUrl, { method: 'DELETE' })
 
   .then((response) => {
 
    if (response.ok) {
 
     setMemberData(null);
 
     setPharmacyData(null);
 
     setUNIQUEPERSONKEY('');
 
     setShowConfirmation(false);
 
    } else {
 
     throw new Error('Deletion failed');
 
    }
 
   })
 
   .catch((error) => {
 
    console.error('Error deleting data:', error);
 
    setShowConfirmation(false);
 
   });
 
 };
 
 const cancelDelete = () => {
 
  setShowConfirmation(false);
 
 };
 
 return (
 
  <div>
 
   <h1>ABC Insurance Company</h1>
 
   <label>
 
    Input:
 
    <input type="text" value={UNIQUEPERSONKEY} onChange={handleUNIQUEPERSONKEYChange} />
 
   </label>
 
   <button onClick={fetchMemberData}>Show</button>
 
   {memberData && (
 
    <div>
 
     <h2>Member Details</h2>
 
     <p>Name: {memberData.firstname} {memberData.lastname}</p>
 
     <p>DOB: {memberData.dateofbirth}</p>
 
     <p>Address: {memberData.permanentaddresslinE1
 
}-{memberData.permanentaddresslinE2}-{memberData.permanentcity}-{memberData.permanentcountry}</p>
 
   <p>Genter:{memberData.gender}</p>
 
   <p>Phone: {memberData.telephonenumber}</p>
 
     {/* Display other member details here */}
 
     <button onClick={handleDeleteClick}>Delete Member</button>
 
    </div>
 
   )}
 
   {pharmacyData && (
 
    <div>
 
     <h2>Pharmacy Details</h2>
 
     <p>Prescription: {pharmacyData.PRESCRIPTION}</p>
 
     {/* Display other pharmacy details here */}
 
    </div>
 
   )}
 
   {showConfirmation && (
 
    <div>
 
     <p>Are you sure you want to delete this member and related pharmacy records?</p>
 
     <button onClick={confirmDelete}>Confirm</button>
 
     <button onClick={cancelDelete}>Cancel</button>
 
    </div>
 
   )}
 
  </div>
 
 );
 
}
 
export default App;