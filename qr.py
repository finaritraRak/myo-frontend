import qrcode
import tkinter as tk
from tkinter import filedialog

# Fonction pour générer un code QR à partir d'un lien de site web
def generate_qr_code():
    website_link = entry.get()
    if website_link:
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(website_link)
        qr.make(fit=True)

        img = qr.make_image(fill_color="black", back_color="white")
        
        file_path = filedialog.asksaveasfilename(defaultextension=".png", filetypes=[("PNG files", "*.png")])
        if file_path:
            img.save(file_path)
            status_label.config(text=f"Code QR généré avec succès dans {file_path}")

# Créez une fenêtre principale
root = tk.Tk()
root.title("Générateur de code QR")

# Créez un label
label = tk.Label(root, text="Entrez le lien du site web:")
label.pack()

# Créez une entrée
entry = tk.Entry(root, width=40)
entry.pack()

# Créez un bouton pour générer le code QR
generate_button = tk.Button(root, text="Générer le code QR", command=generate_qr_code)
generate_button.pack()

# Créez un label pour afficher le statut
status_label = tk.Label(root, text="")
status_label.pack()

# Lancez la boucle principale de l'interface utilisateur
root.mainloop()
