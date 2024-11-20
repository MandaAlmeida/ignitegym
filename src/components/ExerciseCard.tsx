import { Heading, HStack, Image, VStack, Text, Icon } from "@gluestack-ui/themed";
import { ChevronRight } from "lucide-react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps

export function ExerciseCard({ ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack bg="$gray500" alignItems="center" p="$2" pr="$4" rounded="$md" mb="$3">
                <Image source={{ uri: "https://th.bing.com/th/id/OIP.6m4z2hQ6kdompjnT5Zz3jgHaEr?rs=1&pid=ImgDetMain" }} alt="Imagem do exercicio" w="$16" h="$16" rounded="$md" mr="$4" resizeMode="cover" />
                <VStack flex={1}>
                    <Heading fontSize="$lg" color="$white" fontFamily="$heading">Puxada frontal</Heading>
                    <Text fontSize="$sm" color="$gray200" mt="$1" numberOfLines={2}>3 séries x 12 repetições</Text>
                </VStack>
                <Icon as={ChevronRight} color="$gray300" />
            </HStack>
        </TouchableOpacity>
    )
}