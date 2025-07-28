import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Formulaire = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    objet: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.nom) newErrors.nom = "Nom requis";
    if (!formData.prenom) newErrors.prenom = "Prénom requis";
    if (!formData.email) {
      newErrors.email = "Email requis";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }
    if (!formData.telephone) newErrors.telephone = "Téléphone requis";
    if (!formData.objet) newErrors.objet = "Objet requis";
    if (!formData.description || formData.description.length < 20) {
      newErrors.description = "You have to enter at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      const mailtoLink = `mailto:flexmind.agency@gmail.com?subject=Contact: ${encodeURIComponent(formData.objet)}&body=
        Nom: ${encodeURIComponent(formData.nom)}%0D%0A
        Prénom: ${encodeURIComponent(formData.prenom)}%0D%0A
        Téléphone: ${encodeURIComponent(formData.telephone)}%0D%0A
        Email: ${encodeURIComponent(formData.email)}%0D%0A%0D%0A
        Description:%0D%0A${encodeURIComponent(formData.description)}
      `.replace(/\s+/g, ' '); // Supprime les espaces multiples

      window.location.href = mailtoLink;
      
      // Réinitialisation après 2s
      setTimeout(() => {
        setFormData({
          nom: '',
          prenom: '',
          telephone: '',
          email: '',
          objet: '',
          description: ''
        });
        setIsSubmitting(false);
      }, 2000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Efface l'erreur quand l'utilisateur corrige
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <div id="formulaire" className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-20">
      <h1 className="text-4xl md:text-5xl font-bold text-[#115f5c] dark:text-[#a0f0dd] mb-6">
        Start now!
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nom et Prénom sur la même ligne */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Last name *
            </label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.nom ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } bg-white dark:bg-gray-700`}
            />
            {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              First name *
            </label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.prenom ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } bg-white dark:bg-gray-700`}
            />
            {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom}</p>}
          </div>
        </div>

        {/* Email et Téléphone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } bg-white dark:bg-gray-700`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Phone number *
            </label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.telephone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } bg-white dark:bg-gray-700`}
            />
            {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>}
          </div>
        </div>

        {/* Objet */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Object *
          </label>
          <input
            type="text"
            name="objet"
            value={formData.objet}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.objet ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } bg-white dark:bg-gray-700`}
          />
          {errors.objet && <p className="text-red-500 text-xs mt-1">{errors.objet}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Description de votre demande *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.description ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } bg-white dark:bg-gray-700`}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">{errors.description}</p>
          )}
        </div>

        {/* Bouton de soumission */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-medium ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#12a387] hover:bg-[#0d8b72] text-white'
          } transition-colors`}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </motion.button>
      </form>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        * Required fields.
      </p>
    </div>
  );
};

export default Formulaire;