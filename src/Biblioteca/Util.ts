import { fakerPT_BR as faker } from '@faker-js/faker';

export class Util {

    static gerarNome(): string{
        const randomName = faker.person.firstName();
        return randomName;
    }
    static gerarIsbn(): string{
        return ""+faker.number.int();
    }
}