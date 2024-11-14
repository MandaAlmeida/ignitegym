import { Image, VStack, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";

import BackgroundImage from "@assets/background.png";
import Logo from "@assets/logo.svg"
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

import { AuthNavidatorRoutesProps } from "@routes/auth.routes";

export function SignIn() {
    const navigation = useNavigation<AuthNavidatorRoutesProps>();

    function handleNewAccount() {
        navigation.navigate("signUp")
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack flex={1}>
                <Image
                    source={BackgroundImage}
                    alt="Imagem de pessoas treinando"
                    defaultSource={BackgroundImage}
                    position="absolute"
                    w="$full"
                    h={624}
                />
                <VStack flex={1} px="$10" pb="$16">
                    <Center my="$24">
                        <Logo />
                        <Text color="$gray100" fontSize="$sm">Treine sua mente e seu corpo.</Text>
                    </Center>
                    <Center gap="$2">
                        <Heading color="$gray100">Acesse a conta</Heading>
                        <Input placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
                        <Input placeholder="Senha" secureTextEntry autoCapitalize="none" />

                        <Button title="Acessar" />
                    </Center>
                    <Center flex={1} justifyContent="flex-end" mt="$4">
                        <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">Ainda não tem acesso?</Text>
                        <Button title="Criar Conta" variant="outline" onPress={handleNewAccount} />
                    </Center>
                </VStack>
            </VStack>
        </ScrollView>
    )
}