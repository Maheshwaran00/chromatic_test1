import TextInput from "./TextInput";
import {within,userEvent} from '@storybook/nextjs'
export default {
    title: 'TextInput',
    component : TextInput
}

export const Default = () => <TextInput/>; 
export const Large =  {
    args:{
        size:'large',
        value:'Large Input Text'
    }
}
export const placeHolder = () => <TextInput placeHolder='abc@gmail.com' type ='email'/>;

export const email ={
    args: placeHolder.args,
    play: async({canvasElement})=>{
        const canvas = within(canvasElement)
        const emailInput = await canvas.getByplaceHolderText('abc@gmail.com');
        await userEvent.click(emailInput);
        await userEvent.keyboard('wer@email.com');
    }
}