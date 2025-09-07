<?php
$wrapper_attributes = get_block_wrapper_attributes();
?>
<section <?php echo $wrapper_attributes; ?> style="height: 100%; min-width: 100%; scroll-snap-align: start; overflow: hidden;" data-title="<?php echo esc_attr($attributes['title'] ?? ''); ?>" data-icon="<?php echo wp_json_encode($attributes['icon'] ?? []); ?>">
    <?php echo $content; ?>
</section>
