import { TextareaHTMLAttributes, useEffect, useRef } from 'react';

interface MTListTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const MTListTextarea = ({ ...rest }: MTListTextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      const el = textareaRef.current;
      el.dispatchEvent(new Event('input'));
      (el as HTMLElement).style.height = '0px';
      (el as HTMLElement).style.height = (el as HTMLElement).scrollHeight + 4 + 'px';
    }
  }, []);

  return <textarea ref={textareaRef} {...rest} />;
};

export default MTListTextarea;
