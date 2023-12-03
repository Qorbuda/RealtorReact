import React, { useState } from 'react';
import Select from 'react-select';


function BaseSelect({ id,  nameOfSelect, controller, placeholder, onChange, inModal = false }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    var defaultVal = controller.options.find(o => o.index === controller.state);
    var defmod = defaultVal ? {label: defaultVal.name, value:defaultVal.index}:null;
    const handleSelectChange = (event) => {
        const selectedIndex = event.value;
        controller.setState(selectedIndex);
        
        const selectedValue = event.label;
        if (onChange) {
          onChange(selectedValue);
        }
      };
    return (

        <Select placeholder={placeholder} 
            menuIsOpen={menuIsOpen}
            onMenuOpen={() => setMenuIsOpen(true)}
            onMenuClose={() => setMenuIsOpen(false)}
            id={id}
            type="text" 
            name={nameOfSelect} index={controller.state}
            value={defmod}
            defaultValue={defmod} // Use the defaultValue prop
            onChange={handleSelectChange}
            options={controller.options.map((option) => ({
                label: option.name,
                value: option.index
            }))}
            menuPosition='fixed'
            menuPortalTarget={document.body}
            styles={{
                container: styles => ({
                    width: '100%'
                }),
                control: styles => ({
                    display: 'flex',
                    background: '#F2F2F2',
                    borderRadius: menuIsOpen ? '15px 15px 0 0' : '15px',
                    padding: '10px 24px',
                    width: '100%',
                    cursor: 'pointer'
                }),
                indicatorSeparator: styles => ({
                    display: 'none'
                }),
                menu: styles => ({
                    background: '#F2F2F2',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0 24px 6px 24px',
                    borderRadius: '0 0 15px 15px',
                    zIndex: '200'
                }),
                option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
                    marginBottom: '12px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    backgroundColor: isFocused ? '#03001e' : 'none',
                    color: isFocused ? '#fff' : '#333333',
                    borderRadius: '10px',
                    padding: '10px'
                }),
                menuPortal: base => ({ ...base, zIndex: 5 })
            }}>
        </Select>
    );
};

export default BaseSelect;