// api/mapleStoryApi.js
const API_KEY = 'test_a7641d71ec05be204900f8566cb56a7af6f0f78923ab032b1624d1bffab3ac1021e887e6d3bba841e0082db089ea4e76';

export const fetchCharacterId = async (characterName) => {
    const response = await fetch(`https://open.api.nexon.com/maplestory/v1/id?character_name=${encodeURIComponent(characterName)}`, {
      headers: {
        "x-nxopen-api-key": API_KEY
      }
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  };

export const fetchCharacterData = async (ocid,yesterdayDate) => {
    const response = await fetch(`https://open.api.nexon.com/maplestory/v1/character/basic?ocid=${ocid}&date=${yesterdayDate}`, {
    headers: {
        "x-nxopen-api-key": API_KEY
    }
});
if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  };


export const fetchItemData = async (ocid, yesterdayDate) => {
    const response = await fetch(`https://open.api.nexon.com/maplestory/v1/character/item-equipment?ocid=${ocid}&date=${yesterdayDate}`, {
      headers: {
        "x-nxopen-api-key": API_KEY
      }
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  };
  