import { InputTooltip } from '../inputs/TooltipInputs'
import { FloatingLabelInputs } from '../inputs/FloatingLabelInputs'
import { createStyles, Switch,Flex,Select,Input, Group } from '@mantine/core'
import { useState } from 'react';
import { InputBase } from '@mantine/core';
import InputMask from 'react-input-mask';



export function Home() {
    const [checked, setChecked] = useState(false);

    return (
        <div className='home'>
            <InputTooltip></InputTooltip>
            <FloatingLabelInputs></FloatingLabelInputs>
        

            <Flex
                justify="center"
                align="center"
                direction="row"
                my="lg"
                > 
                <Switch TextLabel="true" offLabel="false" size='md' checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
            </Flex>

            <Group mx={100} >  
            <Select
            label="InputData Box"
            placeholder="Pick one"
            data={[
                { value: "String", label: 'String' },
                { value: "float", label: 'Float' },
                { value: 'number', label: 'Number' },
                { value: 'boolean', label: 'Boolean' },
                ]}
            />
            <Input.Wrapper label="InputData" required >
                <Input placeholder="InputData" />
            </Input.Wrapper>
            <Input.Wrapper required>
                <Switch  size='md'  label="Is Delimiter" TextLabel="true" offLabel="false" />
            </Input.Wrapper>
            </Group>