import { ServiceModel } from "models/Service.model";
import { Box, Button, FlatList, Heading, HStack, Input, Text, VStack } from "native-base";
import { useState } from "react";

const Services = (props: { services: ServiceModel[]}) : JSX.Element=> {
    const renderService = (service: ServiceModel) : JSX.Element => <Box
    rounded={'md'}       
    borderWidth={1}
    p={2}       
    m={2}
    bg={{
     linearGradient: {
       colors: ['lightBlue.100', 'violet.300'],
       start: [0, 0],
       end: [1, 0],
     },
   }}
   >
   <VStack space={3} alignItems={'flex-start'}>
      <Text color={'yellow.300'} bold>{service.name}</Text>
      <Text>{service.description}</Text>
   </VStack>
   <VStack alignItems={'flex-end'}>
        <HStack space={1} alignItems={'center'}>
             <Text>Valor total: </Text>             
             <Text color="violet.500" bold>??</Text>
       </HStack>
   </VStack>
   <HStack justifyContent={'space-between'}>
      <VStack space={3}>
      <HStack  space={1} alignItems={'center'}>
          <Text color={'black'} >Quantidade: </Text>
          <Input keyboardType="numeric" variant="underlined" placeholder="0" onChangeText={(ev) => setQuantity(Number(ev))}/>
      </HStack>
      <HStack  space={1}>
          <Text color={'black'}>Preço: </Text>
          <Text color={'violet.900'} bold>{service.price}</Text>
      </HStack>
      </VStack>
      <VStack space={3} justifyContent={'center'}>
          <Button colorScheme='primary' variant='solid'>Adicionar</Button>
      </VStack>
   </HStack>   
 </Box>

  const [quantity, setQuantity] = useState(1)
   const title : JSX.Element = <Heading size={"2xl"} color={'violet.500'} textAlign={'center'}>Serviços:</Heading>
    return <>
    <FlatList
      data={props.services}
      renderItem={({item}) => renderService(item)}
      keyExtractor={(item: ServiceModel) => item.id.toString()}
      ListHeaderComponent={title}
    >
    </FlatList>
    </>
}

export default Services;