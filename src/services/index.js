export default async function converter(selectedCoin, targetCoin, value) {

    if (selectedCoin != targetCoin) {

        const response = await fetch(`https://economia.awesomeapi.com.br/last/${selectedCoin}-${targetCoin}`);

        const data = await response.json();

        return data;
    }

}   