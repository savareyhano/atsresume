const Language = ({ title, languages }) => {
  return (
    languages.length > 0 && (
      <div>
        <h2 className="section-title mb-1 border-b-2 border-gray-300 editable"
          contentEditable
          suppressContentEditableWarning
        >
          {title}
        </h2>
        <p className="sub-content">
          {languages.map((language, index) => (
            <span className="break-words" key={index}>
              {language}
              {index < languages.length - 1 && ', '}
            </span>
          ))}
        </p>
      </div>
    )
  );
};

export default Language;