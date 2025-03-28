App com controle de acesso com email e senha pelo firebase: authentication e para a bio o firebase: Firestore Database(user: name e bio).
Para gerar o apk.
Para um processo mais robusto e com mais opções de personalização, o Expo agora recomenda o EAS Build (Expo Application Services), que tem mais recursos, como a possibilidade de usar dependências nativas, personalizar o arquivo app.json, etc.

Se você quiser usar o EAS Build:

Instale o EAS CLI:

npm install -g eas-cli
Configure o seu projeto com o EAS CLI:

eas build:configure
Crie o build para Android ou iOS:

Para Android:

eas build --platform android
Para iOS:

eas build --platform ios

Testar o aplicativo

Se você gerar um APK para Android, você pode transferir o arquivo diretamente para o seu dispositivo e instalá-lo.
Para o iOS, você pode usar o TestFlight para testar a versão beta do app.

Dicas extras:

Para uma melhor experiência de teste, se estiver com o app em desenvolvimento, você pode usar o Expo Go para testar rapidamente no seu dispositivo, sem precisar gerar o build.
Lembre-se de sempre fazer ajustes no app.json antes de gerar a versão final do seu app (para definir ícones, splash, permissões, etc).
