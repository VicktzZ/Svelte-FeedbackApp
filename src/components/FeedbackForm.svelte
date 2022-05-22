<script>
    import {v4 as uuidv4} from 'uuid'
    import { FeedbackStore } from '../stores.js'
    import Card from './Card.svelte'
    import Button from './Button.svelte'
    import RatingSelect from './RatingSelect.svelte'

    let text = ''
    let rating = 10
    let btnDisabled = true
    let min = 10
    let message

    const handleSelect = e => rating = e.detail

    const handleInput = () => {
        if (text.trim().length <= min || text.trim().length <= 12) {
            min = 10
            message = `O texto deve conter no mínimo ${min} caractéres`
            btnDisabled = true
        } else {
            message = null
            btnDisabled = false
        }
    }

    const handleSubmit = () => {
        if (text.trim().length > min) {
            const newFeedback = {
                id: uuidv4(),
                text,
                rating: +rating
            }

        FeedbackStore.update(currentFeedback => [newFeedback, ...currentFeedback])
            
        text = ''        
    
        }
    }
</script>

<Card>
    <header>
        <h2>Como você avaliaria seu serviço conosco?</h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
        <RatingSelect on:rating-select={handleSelect}/>
        <div class="input-group">
            <input type="text" on:input="{handleInput}" bind:value={text} placeholder="Diga-nos algo que faria você voltar novamente">
            <Button disabled={btnDisabled} type="submit">Enviar</Button>
        </div>
        {#if message}
            <div class="message">
                {message}
            </div>
        {/if}
    </form>
</Card>

<style>
    header {
        max-width: 400px;
        margin: auto;
    }

    header h2 {
        font-size: 22px;
    }

    .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  .message{
    padding-top: 10px;
    text-align: center;
    color: #993a33;
  }
</style>