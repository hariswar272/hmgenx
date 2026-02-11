'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { SITE_CONFIG } from '@/lib/constants';
import { staggerContainer, fadeInLeft, fadeInRight } from '@/lib/animations';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    bg: 'bg-secondary-500/10 dark:bg-secondary-500/15',
    iconColor: 'text-secondary-600 dark:text-secondary-400',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
    bg: 'bg-secondary-600/10 dark:bg-secondary-600/15',
    iconColor: 'text-secondary-600 dark:text-secondary-400',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: SITE_CONFIG.location,
    href: '',
    bg: 'bg-accent-500/10 dark:bg-accent-500/15',
    iconColor: 'text-accent-600 dark:text-accent-400',
  },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    console.log('Form Data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-[#f3f1ec] dark:bg-dark-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-radial from-secondary-500/5 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-radial from-accent-500/5 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Contact"
          title="Get In"
          highlight="Touch"
          subtitle="Ready to start your project? Contact us today for a free consultation"
        />

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((item) => (
              <motion.div key={item.label} variants={fadeInLeft}>
                <Card variant="glass" hover className="p-5 group">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 ${item.bg} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">{item.label}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-600 dark:text-gray-400 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Location visual */}
            <motion.div variants={fadeInLeft}>
              <Card variant="glass" className="p-5 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/5 to-accent-500/3" />
                <div className="relative text-center py-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary-500/10 dark:bg-secondary-500/15 rounded-full mb-3">
                    <MapPin className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Guntur, Palnadu</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Andhra Pradesh, India</p>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card variant="glass" className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    label="Name"
                    placeholder="Your name"
                    error={errors.name?.message}
                    {...register('name')}
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="your.email@example.com"
                    error={errors.email?.message}
                    {...register('email')}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    label="Phone"
                    placeholder="+91 98765 43210"
                    error={errors.phone?.message}
                    {...register('phone')}
                  />
                  <Input
                    label="Subject"
                    placeholder="How can we help?"
                    error={errors.subject?.message}
                    {...register('subject')}
                  />
                </div>

                <Textarea
                  label="Message"
                  placeholder="Tell us about your project..."
                  error={errors.message?.message}
                  {...register('message')}
                />

                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-3 p-4 bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Thank you! Your message has been received. We&apos;ll get back to you soon.</span>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  variant="glow"
                  size="lg"
                  className="w-full group"
                  loading={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
