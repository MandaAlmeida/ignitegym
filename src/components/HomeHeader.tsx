import { Heading, HStack, Text, VStack, Icon } from "@gluestack-ui/themed";
import { LogOut } from "lucide-react-native"

import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
    return (
        <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
            <UserPhoto source={{ uri: "https://github.com/mandaalmeida.png" }}
                w="$16"
                h="$16"
                alt="Imagem do usuario" />
            <VStack flex={1}>
                <Text color="$gray100" fontSize="$sm">Olá,</Text>
                <Heading color="$gray100" fontSize="$md">Amanda Almeida</Heading>
            </VStack>

            <Icon as={LogOut} color="$gray200" size="xl" />

        </HStack>
    )
}