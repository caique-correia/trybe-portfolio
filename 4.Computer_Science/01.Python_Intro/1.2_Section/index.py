import sys


if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)

user_input = input("Digite uma mensagem: ")
print('O valor recebido foi:', user_input)


err = "Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)


while True:
    try:
        x = int(input("Por favor digite um número inteiro: "))
        break
    except ValueError:
        print("Oops! Esse não era um número inteiro. Tente novamente...")