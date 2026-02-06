import { useState } from "react";

const TagInput = ({
  label,
  placeholder,
  tags,
  onTagsChange,
  suggestions = [],
}) => {
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const addTag = (tag) => {
    const trimmed = tag.trim();
    if (trimmed && !tags.includes(trimmed)) {
      onTagsChange([...tags, trimmed]);
    }
    setInput("");
    setShowSuggestions(false);
  };

  const removeTag = (tag) => {
    onTagsChange(tags.filter((t) => t !== tag));
  };

  const filteredSuggestions = suggestions.filter(
    (s) =>
      s.toLowerCase().includes(input.toLowerCase()) && !tags.includes(s)
  );

  return (
    <div className="tag-input">
      <label className="tag-input__label">{label}</label>
      <div className="tag-input__tags">
        {tags.map((tag) => (
          <span key={tag} className="tag-input__tag">
            {tag}
            <button
              onClick={() => removeTag(tag)}
              className="tag-input__tag-remove"
            >
              ×
            </button>
          </span>
        ))}
      </div>
      <div className="tag-input__wrapper">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setShowSuggestions(true);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && input.trim()) {
              e.preventDefault();
              addTag(input);
            }
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder={placeholder}
          className="tag-input__field"
        />
        {showSuggestions && input && filteredSuggestions.length > 0 && (
          <div className="tag-input__suggestions">
            {filteredSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                onMouseDown={() => addTag(suggestion)}
                className="tag-input__suggestion"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
      <p className="tag-input__hint">Press Enter to add</p>
    </div>
  );
};

export default TagInput;
