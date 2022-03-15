import 'styled-componets/native';

declare module 'styled-components/native' {
    export interface DefaultTheme {
        /** PRETO HEADER */ header: string;
        /** TABBAR QUASE BRANCO */ tabbar: string;
        /** BACKGROUND QUASE BRANCO */ background: string;
        /** PASTAS AZULS */ folders: string;
        /** REPO TITULO PRETO */ repoTitle: string;
        /** DESCRIÇÃO REPOSITORIO CINZA */ repoDescription: string;
        /** VERMELHO */ error: string;
    }
}
