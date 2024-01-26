export default class WhatsUpLinkUtil {
    
    static openLink = (phoneNumber) => {
        const whatsUpLink = `https://wa.me/${this.parcePhoneNumber(phoneNumber)}`;
        window.open(whatsUpLink, "_blank");
    }

    static parcePhoneNumber = (phoneNumber) => {
        const cleanedNumber = phoneNumber.replace(/\s/g, '');
        const commaIndex = cleanedNumber.indexOf(',');
        const finalNumber = commaIndex !== -1 ? cleanedNumber.slice(0, commaIndex) : cleanedNumber;
        return finalNumber;
    }
}



