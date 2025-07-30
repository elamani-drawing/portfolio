'use client';
import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation';
import { Send } from 'lucide-react'
export const ContactContent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const formRef = useRef<HTMLFormElement>(null);

    const [redirectURL, setRedirectURL] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRedirectURL(`${window.location.origin}`)
        }
    }, [])

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData);
        if (formRef.current) {
            formRef.current.submit(); // send to FormSubmit
            // alert('Message envoyé!');
        }
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: '',
        })
    }

    const searchParams = useSearchParams();
    const router = useRouter();

    const [sendValue, setSendValue] = useState<string | null>(null);

    useEffect(() => {
        const send = searchParams.get('send');
        if (send) {
            setSendValue(send);
            const newParams = new URLSearchParams(searchParams.toString());
            newParams.delete('send');
            router.replace(`?${newParams.toString()}`);

            if (send === 'success') {
                alert('Succès : votre action a été prise en compte.');
            } else if (send === 'error') {
                alert('Erreur : une erreur est survenue.');
            }
        }
    }, [searchParams, router]);

    return (
        <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">Formulaire De Contact</h2>
            <div className="w-16 h-1 bg-[var(--main-color)] dark:bg-[var(--main-color)] mb-8"></div>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                action="https://formsubmit.co/assanisaidelamani@gmail.com"
                method="POST"
                className="space-y-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nom"
                            required
                            className="w-full px-4 py-3 bg-gray-100 bg-opacity-10 dark:bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--main-color)]"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            className="w-full px-4 py-3 bg-gray-100 bg-opacity-10 dark:bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--main-color)]"
                        />
                    </div>
                </div>
                <div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-100 bg-opacity-10 dark:bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--main-color)] resize-none"
                    ></textarea>
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-[var(--main-color)]/10 text-[var(--main-color)] dark:text-[var(--main-color)] font-medium rounded-lg transition-colors cursor-pointer border-1 hover:border-transparent"
                    >
                        <span>Envoyer</span>
                        <Send size={18} />
                    </button>
                </div>
                <input type="hidden" name="_next" value={`${redirectURL}?section=contact&send=success`} />
                <input type="hidden" name="_captcha" value="false" />
            </form>
        </div>
    )
}
