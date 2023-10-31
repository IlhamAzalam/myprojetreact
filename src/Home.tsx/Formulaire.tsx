import  { useState } from 'react';
function Formulaire() {
    
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nomError, setNomError] = useState('');
    const [prenomError, setPrenomError] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();

      // Vérification du format de l'adresse Gmail
      const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
      alert('Adresse Gmail invalide');
      return;
    } else {
      setEmailError(''); 
    }
      // Vérification du format du nom et du prénom
      const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(nom)) {
      alert('Nom invalide');
      return;
    } else {
      setNomError(''); // Réinitialisez l'erreur s'il n'y a pas de problème
    }

    if (!namePattern.test(prenom)) {
      alert('Prénom invalide');
      return;
    } else {
      setPrenomError(''); // Réinitialisez l'erreur s'il n'y a pas de problème
    }
      // Si toutes les vérifications passent, vous pouvez soumettre le formulaire
      console.log('Formulaire soumis avec succès !');
    };
  
    return (
        <form className="form-container" >
        <div className="body">
        <h2 className="formulaire-title">Formulaire de CV !!! </h2>
          <label htmlFor="nom" className="form-label" >Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            className="form-input"
            required
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            
          />
          <span className="error-message">{nomError}</span>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="prenom" className="form-label">Prénom :</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            onChange={(e) => setPrenom(e.target.value)}
            className="form-input"
            required
          />
         <span className="error-message">{prenomError}</span>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="date_naissance" className="form-label">Date de Naissance :</label>
          <input
            type="date"
            id="date_naissance"
            name="date_naissance"
            
            className="form-input"
            required
          />
        </div>
        <br></br>
        <br></br>
        <div>
          <label className="form-label">Genre :</label>
          <input
            type="radio"
            id="Femme"
            name="sexe"
            value="Femme"
            
          />
          <label htmlFor="Femme" className="form-label" >Femme</label>
          <input
            type="radio"
            id="Homme"
            name="sexe"
            value="Homme"
            
          />
          <label htmlFor="Homme" className="form-label">Homme</label>
        </div>
        <br></br>
        <br></br>
        <div>
          <label className="form-label">Situation familiale :</label>
          <input
            type="radio"
            id="Celibataire"   
            name="situation_familiale"
            value="Célibataire"
            
          />
          <label htmlFor="Celibataire" className="form-label">Célibataire</label>
          <input
            type="radio"
            id="Mariee"           
            name="situation_familiale"
            value="Mariée"
            
          />
          <label htmlFor="Mariee" className="form-label">Mariée</label>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="adresse" className="form-label">Adresse :</label>
          <input
            type="text"
            id="adresse"
            name="adresse"
            className="form-input"
           
            required
          />
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="email" className="form-label">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className="error-message">{emailError}</span>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="titre_cv" className="form-label">Titre de CV :</label>
          <input
            type="text"
            id="titre_cv"
            name="titre_cv"
            className="form-input"
            
          />
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="description_objectif" className="form-label">Description de l'objectif professionnel :</label>
          <textarea
            id="description_objectif"
            name="description_objectif"
            className="form-input"
          />
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="diplome_universitaire" className="form-label">Diplôme universitaire :</label>
          <select
            id="diplome_universitaire"
            className="form-input"
            name="diplome_universitaire"
          >
            <option value="BAC+2">BAC+2</option>
            <option value="BAC+3">BAC+3</option>
            <option value="BAC+4">BAC+4</option>
            <option value="BAC+5 et plus">BAC+5 et plus</option>
          </select>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="competences_techniques" className="form-label">Compétences techniques :</label>
          <textarea
            
            id="competences_techniques"
            className="form-input"
            name="competences_techniques"
          />
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="experience_professionnelle" className="form-label">Expérience professionnelle :</label>
          <textarea
            id="experience_professionnelle"
            className="form-input"
            name="experience_professionnelle"
          />
        </div>
        <br></br>
       
        <button type="submit" className="form-button" onClick={handleSubmit}>Envoyer</button>
      </form>
    );
}
  export default Formulaire;